const events = {
  buyHandler(product) {
    // console.log("buy", product);

    const el = document.createElement("div");
    el.innerHTML = `
  <div>${product.name}</div>
  <div>${product.price}</div>
  <div>${product.stock}</div>
    `;

    App.modal.show(el);
    App.modal.setOnConfirm(() => {
      // console.log("OKKKKKKKKKK");
      App.store.state.myCart.addCart(product);

      if (!this.count) {
        const myCart = [];
        const count = myCart.push(product);
        this.count = count;
        this.myCart = myCart;
      } else {
        const myCart = this.myCart;
        const count = myCart.push(product);
        this.count = count;
        this.myCart = myCart;
      }

      addCart = this.myCart;

      App.store.state.myCart.addCart(addCart);

      // console.log("mycarttttt", this.myCart);
    });
  },
};
