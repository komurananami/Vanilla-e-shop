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
      } else if (setCount + countInMyCart == product.stock) {
        setCount++;
        count.innerHTML = `count: ${setCount}`;
        errorMessage.innerHTML = "out of stock";
      }
    };

    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    if (setCount + countInMyCart > product.stock) {
      errorMessage.innerHTML = "out of stock";
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
      App.store.mutations.addCart(product, setCount);
      App.contollers.renderSnackbar();
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
      if (setCount < product.stock) {
        setCount++;
        count.innerHTML = `count: ${setCount}`;
        // el.errorMessage.innerHTML = "";
        // console.log("setCount < product.stock", setCount);
      }
      //  else {
      //   el.errorMessage.innerHTML = "out of stock";
      // }
    };

    // const errorMessage = document.createElement("div");

    el.appendChild(title);
    el.appendChild(hr);
    el.appendChild(productEl);
    el.appendChild(price);
    el.appendChild(count);
    el.appendChild(btnMinus);
    el.appendChild(btnPlus);
    // el.appendChild(errorMessage);

    App.modal.show(el, product, setCount);

    App.modal.setOnConfirm(() => {
      App.store.mutations.removeCart(product, setCount);
      App.contollers.renderSnackbar();
    });
  },
};
