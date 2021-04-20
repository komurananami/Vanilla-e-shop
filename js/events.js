const events = {
  addCartHandler(product) {
    const el = document.createElement("div");
    el.innerHTML = `
      <div>add this item to your cart?</div>
      <hr/>
      <div>product: ${product.name}</div>
      <div>price: USD ${product.price}</div>
      <div>stock: ${product.stock}</div>`;

    App.modal.show(el);

    App.modal.setOnConfirm(() => {
      App.store.mutations.addCart(product, 1);
      App.contollers.renderSnackbar();
    });
  },
  removeHandler(product) {
    console.log("Ill remove", product);

    const el = document.createElement("div");
    el.innerHTML = `
      <div>you remove ?</div>
      <hr/>
      <div>product: ${product.name}</div>
      <div>price: USD ${product.price}</div>
      <div>stock: ${product.stock}</div>`;

    App.modal.show(el);

    App.modal.setOnConfirm(() => {
      App.store.mutations.removeCart(product, 1);
    });
  },
};
