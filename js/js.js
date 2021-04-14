const App = {
  init() {
    this.contollers.renderProducts();
  },

  store,

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
        const btn = document.createElement("button");

        const options = {
          el: imgs,
          images: product.images,
        };
        const carrossel = new Carrossel(options);

        document.body.style.margin = "0px";

        name.innerHTML = product.name;
        price.innerHTML = `USD ${product.price}`;
        // store.images.style.width = "100px";

        btn.innerHTML = "Buy";

        el.appendChild(imgs);
        el.appendChild(name);
        el.appendChild(price);
        el.appendChild(btn);

        el.classList.add("product-item");

        // console.log(el);
        els.productsContainer.appendChild(el);
      }
      els.header.className = "header";
      els.Logo.className = "headerLogo";
      els.main.className = "main";
      els.topWrapper.className = "topWrapper";
      els.topImg.className = "topImg";
      els.topMessage.className = "topMessage";
      els.introWrapper.className = "introWrapper";
      els.introHeading.className = "introHeading";
      els.introHeadingTop.className = "introHeadingTop";
      els.introHeadingMessage.className = "introHeadingMessage";
      els.footer.className = "footer";

      els.Logo.src =
        "https://fontmeme.com/permalink/210414/1f4278e19d861152f501b2fbaa83669b.png";

      // els.topImg.style.width = "100%";
      els.topImg.src =
        "https://image.shutterstock.com/image-photo/still-life-bread-flour-spikelets-600w-1278808660.jpg";
      els.topMessage.src =
        "https://fontmeme.com/permalink/210414/d61f372a7775edcf55c395a7033954a0.png";
      els.introHeadingTop.innerHTML = "We design delicious";
      els.introHeadingMessage.innerHTML =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </br>nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.";

      els.app.appendChild(els.header);
      els.header.appendChild(els.Logo);

      els.app.appendChild(els.main);
      els.main.appendChild(els.topWrapper);
      els.topWrapper.appendChild(els.topImg);
      els.topWrapper.appendChild(els.topMessage);
      els.main.appendChild(els.introWrapper);
      els.introWrapper.appendChild(els.introHeading);
      els.introHeading.appendChild(els.introHeadingTop);
      els.introHeading.appendChild(els.introHeadingMessage);

      els.app.appendChild(els.footer);
      els.main.appendChild(els.productsContainer);
      // els.app.appendChild(els.footer);
      // els.productsContainer.style.background = "black";
      els.productsContainer.classList.add("products-container");

      // console.log(els.productsContainer);
    },
  },

  elements: {
    app: document.getElementById("app"),
    header: document.createElement("div"),
    Logo: document.createElement("img"),
    main: document.createElement("div"),
    topWrapper: document.createElement("div"),
    topImg: document.createElement("img"),
    topMessage: document.createElement("img"),
    introWrapper: document.createElement("div"),
    introHeading: document.createElement("div"),
    introHeadingTop: document.createElement("div"),
    introHeadingMessage: document.createElement("div"),
    footer: document.createElement("div"),

    productsContainer: document.createElement("div"),
  },
};

App.init();
