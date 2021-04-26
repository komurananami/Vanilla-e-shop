const App = {
  init() {
    this.modal = new Modal();
    this.store.mutations.loadCart();
    this.contollers.renderHeader();
    this.contollers.renderProducts();
    this.contollers.renderHome();
    this.contollers.renderCart();
    this.contollers.renderFooter();

    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page");
    this.router.go(page);
  },

  store,

  events,

  router: {
    go(newPage) {
      const serchParams = new URLSearchParams(location.search);

      serchParams.set("page", newPage);

      const path = newPage ? `?${serchParams.toString()}` : "?";

      history.pushState({ page: newPage }, newPage, path);

      App.elements.home.index.style.display = "none";
      App.elements.incart.index.style.display = "none";

      if (!newPage) {
        App.elements.home.index.style.display = "block";
      } else if (newPage === "cart") {
        App.elements.incart.index.style.display = "block";
      }
    },
  },

  contollers: {
    createProductEl(product, count) {
      const el = document.createElement("div");
      const imgs = document.createElement("div");
      const name = document.createElement("div");
      const price = document.createElement("div");
      const countEl = document.createElement("div");
      const description = document.createElement("div");
      const btn = document.createElement("button");

      const options = {
        el: imgs,
        images: product.images,
      };
      new Carrossel(options);

      document.body.style.margin = "0px";

      name.className = "name";
      price.className = "price";
      description.className = "description";

      name.innerHTML = product.name;
      price.innerHTML = `USD ${product.price}`;
      description.innerHTML = product.description;

      countEl.innerHTML = `Count: ${count}`;
      countEl.setAttribute("key", "count");

      btn.onclick = () => {
        if (btn.innerHTML === "add cart") {
          App.events.addCartHandler(product);
        } else {
          App.events.removeHandler(product);
        }
      };

      el.appendChild(imgs);
      el.appendChild(name);
      el.appendChild(price);
      el.appendChild(description);

      if (!count) {
        btn.innerHTML = "add cart";
      } else {
        btn.innerHTML = "remove";
        btn.className = "btn-remove";
        btn.style.color = "black";
        btn.style.background = "white";
        btn.style.border = "2px solid black";
        el.appendChild(countEl);
      }
      el.appendChild(btn);

      el.classList.add("product-item");

      return el;
    },

    renderProducts() {
      const els = App.elements;
      const store = App.store;

      for (let i = 0; i < store.state.list.length; i++) {
        const product = store.state.list[i];
        const el = App.contollers.createProductEl(product);

        els.home.productsContainer.classList.add("products-container");
        els.home.productsContainer.appendChild(el);
      }
    },

    renderHeader() {
      const els = App.elements;

      els.header.className = "header";
      els.nav.className = "nav";
      els.Logo.className = "headerLogo";
      els.cart.className = "headerCart";

      els.Logo.src =
        "https://fontmeme.com/permalink/210414/1f4278e19d861152f501b2fbaa83669b.png";
      els.Logo.style.cursor = "pointer";
      els.Logo.onclick = function () {
        App.router.go("");
      };

      els.cart.src = "../assets/cart.svg";
      els.cart.onclick = function (e) {
        App.router.go("cart");
        App.contollers.renderCart();
        App.contollers.renderFooter();

        window.scrollTo(0, 0);
      };

      els.app.appendChild(els.header);
      els.header.appendChild(els.nav);
      els.nav.appendChild(els.Logo);
      els.nav.appendChild(els.cart);
    },

    renderHome() {
      const els = App.elements.home;

      els.index.className = "main";
      els.topWrapper.className = "topWrapper";
      els.topImg.className = "topImg";
      els.introWrapper.className = "introWrapper";
      els.introHeading.className = "introHeading";
      els.introHeadingTop.className = "introHeadingTop";
      els.introHeadingMessage.className = "introHeadingMessage";

      els.topImg.src =
        "https://image.shutterstock.com/image-photo/still-life-bread-flour-spikelets-600w-1278808660.jpg";
      els.introHeadingTop.innerHTML = "We design delicious";
      els.introHeadingMessage.innerHTML =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </br>nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.";

      App.elements.app.appendChild(els.index);

      els.index.appendChild(els.topWrapper);
      els.topWrapper.appendChild(els.topImg);
      els.index.appendChild(els.introWrapper);
      els.introWrapper.appendChild(els.introHeading);
      els.introHeading.appendChild(els.introHeadingTop);
      els.introHeading.appendChild(els.introHeadingMessage);
      els.index.appendChild(els.productsContainer);
    },

    renderFooter() {
      const els = App.elements.footer;

      els.index.className = "footer";
      els.footerImg.src =
        "https://fontmeme.com/permalink/210414/1f4278e19d861152f501b2fbaa83669b.png";

      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.footerImg);
    },
    renderCart() {
      const els = App.elements.incart;
      const store = App.store;

      if (!store.state.myCart.length) {
        App.router.go("");

        return;
      }

      for (let i = 0; i < store.state.myCart.length; i++) {
        const myProduct = store.state.myCart[i];
        const product = store.state.list.find(
          (x) => x.id === myProduct.productId
        );
        const el = App.contollers.createProductEl(product, myProduct.count);

        els.productsContainer.classList.add("products-container");

        if (!els.products[product.id]) {
          els.productsContainer.appendChild(el);
          els.products[product.id] = el;
        } else {
          const child = App.helpers.getChild(els.products[product.id], "count");
          if (child) {
            child.innerHTML = `Count: ${myProduct.count}`;
          }
        }
      }

      const inMyCart = App.store.state.myCart;
      const totalAmount = App.helpers.getTotalAmount(inMyCart);

      els.index.className = "incart";
      els.myCartContainer.innerHTML = `My cart [ Total Amount : ${totalAmount} ] `;

      els.myCartContainer.className = "my-cart-container";

      els.confirmPurchaseContainer.className = "buy-cart-container";

      els.confirmPurchase.classList = "buy-cart";
      els.confirmPurchase.innerHTML = "Confirm purchase";
      els.confirmPurchase.onclick = function () {
        const myCart = [...store.state.myCart];

        App.events.confirmPurchaseHandler(myCart);
      };

      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.myCartContainer);
      els.index.appendChild(els.productsContainer);
      els.index.appendChild(els.confirmPurchaseContainer);

      els.confirmPurchaseContainer.appendChild(els.confirmPurchase);
    },

    renderSnackbar(type) {
      const els = App.elements.snackbar;

      els.index.className = "snackbar";
      els.messageContainer.className = "snackbar-message";
      if (type === "remove") {
        els.messageContainer.innerHTML = "remove cart";
      } else {
        els.messageContainer.innerHTML = "add my cart";
      }

      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.messageContainer);
    },
  },

  helpers: {
    getChild(el, key) {
      for (let i = 0; i < el.childNodes.length; i++) {
        const element = el.childNodes[i];

        if (element.getAttribute("key") === key) {
          return element;
        }
      }
    },
    getTotalAmount(inMyCart) {
      let total = 0;
      for (let i = 0; i < inMyCart.length; i++) {
        const element = inMyCart[i];
        const thisTotallAmount = inMyCart[i].count * inMyCart[i].productPrice;

        total += thisTotallAmount;
      }

      return total;
    },
  },

  api: async (type, url, body) => {
    const options = {
      headers: {
        Authorization: "Bearer ",
      },
    };

    const a = await axios.get(``, options);
  },

  elements: {
    app: document.getElementById("app"),
    header: document.createElement("div"),
    nav: document.createElement("nav"),
    Logo: document.createElement("img"),
    cart: document.createElement("img"),

    home: {
      index: document.createElement("div"),
      topWrapper: document.createElement("div"),
      topImg: document.createElement("img"),
      introWrapper: document.createElement("div"),
      introHeading: document.createElement("div"),
      introHeadingTop: document.createElement("div"),
      introHeadingMessage: document.createElement("div"),
      productsContainer: document.createElement("div"),
    },

    footer: {
      index: document.createElement("div"),
      footerImg: document.createElement("img"),
    },
    incart: {
      index: document.createElement("div"),
      productsContainer: document.createElement("div"),
      myCartContainer: document.createElement("div"),
      confirmPurchaseContainer: document.createElement("div"),
      confirmPurchase: document.createElement("button"),
      products: {},
    },
    snackbar: {
      index: document.createElement("div"),
      messageContainer: document.createElement("div"),
    },
  },
};

App.init();
