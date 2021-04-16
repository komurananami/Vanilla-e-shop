const App = {
  init() {
    this.contollers.renderProducts();
    this.contollers.renderHome();
    this.contollers.renderFooter();
  },

  store,

  router: {
    go(newPage) {
      console.log("go", newPage);
    },
  },

  contollers: {
    renderProducts() {
      const els = App.elements;
      const store = App.store;
      console.log("document", document);

      for (let i = 0; i < store.state.list.length; i++) {
        const product = store.state.list[i];
        const el = document.createElement("div");
        const imgs = document.createElement("div");
        const name = document.createElement("div");
        const price = document.createElement("div");
        const description = document.createElement("div");
        const btn = document.createElement("button");

        const options = {
          el: imgs,
          images: product.images,
        };
        const carrossel = new Carrossel(options);

        document.body.style.margin = "0px";

        name.className = "name";
        price.className = "price";
        description.className = "description";

        name.innerHTML = product.name;
        price.innerHTML = `USD ${product.price}`;
        description.innerHTML = product.description;

        btn.innerHTML = "Buy";

        el.appendChild(imgs);
        el.appendChild(name);
        el.appendChild(price);
        el.appendChild(description);
        el.appendChild(btn);

        el.classList.add("product-item");

        // console.log(el);
        els.home.productsContainer.classList.add("products-container");
        els.home.productsContainer.appendChild(el);
      }
      els.header.className = "header";
      els.nav.className = "nav";
      els.Logo.className = "headerLogo";
      els.cart.className = "headerCart";

      els.Logo.src =
        "https://fontmeme.com/permalink/210414/1f4278e19d861152f501b2fbaa83669b.png";

      els.cart.src = "../assets/cart.svg";
      els.cart.onclick = function () {
        App.router.go("cart");
      };

      els.app.appendChild(els.header);
      els.header.appendChild(els.nav);
      els.nav.appendChild(els.Logo);
      els.nav.appendChild(els.cart);

      // console.log(els.productsContainer);
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
  },
};

App.init();
