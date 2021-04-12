const App = {
  init() {
    this.contollers.renderProducts();
  },

  store,

  contollers: {
    renderProducts() {
      const els = App.elements;
      const store = App.store;

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

        name.innerHTML = product.name;
        price.innerHTML = `USD ${product.price}`;

        btn.innerHTML = "Buy";

        el.appendChild(imgs);
        el.appendChild(name);
        el.appendChild(price);
        el.appendChild(btn);

        el.classList.add("product-item");

        console.log(el);
        els.productsContainer.appendChild(el);
      }

      els.app.appendChild(els.productsContainer);
      els.productsContainer.classList.add("products-container");

      console.log(els.productsContainer);
    },
  },

  elements: {
    app: document.getElementById("app"),
    productsContainer: document.createElement("div"),
  },
};

App.init();
