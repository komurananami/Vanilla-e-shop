const events = {
  addCartHandler(product, setCount = 1) {
    const el = document.createElement("div");
    const myCart = App.store.state.myCart;

    const hr = document.createElement("hr");

    const title = document.createElement("div");
    title.innerHTML = "add this item to your cart?";

    const productEl = document.createElement("div");
    productEl.innerHTML = `product: ${product.name}`;

    const price = document.createElement("div");
    price.innerHTML = `price: USD ${product.price}`;

    const count = document.createElement("div");
    count.innerHTML = `count: ${setCount}`;

    const btnMinus = document.createElement("button");
    btnMinus.innerHTML = "-";
    btnMinus.onclick = () => {
      if (setCount > 1) {
        setCount--;
        count.innerHTML = `count: ${setCount}`;
        errorMessage.innerHTML = "";

        App.modal.setDisabled(false);
      }
    };

    const productInMyCart = store.state.myCart.find(
      (x) => x.productId === product.id
    );

    let countInMyCart = 0;
    if (productInMyCart) {
      countInMyCart = productInMyCart.count;
    }

    const btnPlus = document.createElement("button");
    btnPlus.innerHTML = "+";

    btnPlus.onclick = () => {
      if (setCount + countInMyCart < product.stock) {
        setCount++;
        count.innerHTML = `count: ${setCount}`;

        App.modal.setDisabled(false);
      } else if (setCount + countInMyCart == product.stock) {
        setCount++;
        count.innerHTML = `count: ${setCount}`;
        errorMessage.innerHTML = "out of stock";

        App.modal.setDisabled(true);
      }
    };

    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    if (setCount + countInMyCart > product.stock) {
      errorMessage.innerHTML = "out of stock";
      App.modal.setDisabled(true);
    }

    el.appendChild(title);
    el.appendChild(hr);
    el.appendChild(productEl);
    el.appendChild(price);
    el.appendChild(count);
    el.appendChild(btnMinus);
    el.appendChild(btnPlus);
    el.appendChild(errorMessage);

    App.modal.show(el, product, setCount);

    App.modal.setOnConfirm(() => {
      if (setCount + countInMyCart <= product.stock) {
        App.store.mutations.addCart(product, setCount);
        App.contollers.renderSnackbar();
      }
    });
  },
  removeHandler(product, setCount = 1) {
    const el = document.createElement("div");
    const myCart = App.store.state.myCart;

    const hr = document.createElement("hr");

    const title = document.createElement("div");
    title.innerHTML = "you remove?";

    const productEl = document.createElement("div");
    productEl.innerHTML = `product: ${product.name}`;

    const price = document.createElement("div");
    price.innerHTML = `price: USD ${product.price}`;

    const count = document.createElement("div");
    count.innerHTML = `count: ${setCount}`;

    const btnMinus = document.createElement("button");
    btnMinus.innerHTML = "-";
    btnMinus.onclick = () => {
      if (setCount > 1) {
        setCount--;
        count.innerHTML = `count: ${setCount}`;
      }
    };

    const btnPlus = document.createElement("button");
    btnPlus.innerHTML = "+";
    btnPlus.onclick = () => {
      for (let i = 0; i < myCart.length; i++) {
        const myCartProduct = myCart[i];

        if (setCount < myCartProduct.count) {
          setCount++;
          count.innerHTML = `count: ${setCount}`;

          break;
        }
      }
    };

    el.appendChild(title);
    el.appendChild(hr);
    el.appendChild(productEl);
    el.appendChild(price);
    el.appendChild(count);
    el.appendChild(btnMinus);
    el.appendChild(btnPlus);

    App.modal.show(el, product, setCount);

    App.modal.setOnConfirm(() => {
      App.store.mutations.removeCart(product, setCount);
      App.contollers.renderSnackbar();
    });
  },
  confirmPurchaseHandler(myCart) {
    const el = document.createElement("div");

    const title = document.createElement("div");
    title.innerHTML = "purchase all products?";

    el.appendChild(title);

    App.modal.show(el);

    App.modal.setOnConfirm(() => {
      for (let i = 0; i < myCart.length; i++) {
        const myProduct = myCart[i];
        const product = App.store.state.list.find(
          (x) => x.id === myProduct.productId
        );

        App.store.mutations.removeCart(product, myProduct.count);
      }
      el.innerHTML = "";
      App.events.startShoping();
    });
  },
  startShoping() {
    const el = document.createElement("div");

    const message = document.createElement("div");
    message.innerHTML = "Thank you for your purchase!</br>Let's keep shopping.";

    el.appendChild(message);

    App.modal.show(el);

    App.modal.setOnConfirm(() => {
      App.router.go("");
      scrollTo(0, 0);
    });
  },
};
