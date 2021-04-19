const events = {
  buyHandler(product) {
    // console.log("buy", product);

    const el = document.createElement("div");
    el.innerHTML = `
      <div>product: ${product.name}</div>
      <div>price: USD ${product.price}</div>
      <div>stock: ${product.stock}</div>`;

    App.modal.show(el);

    App.modal.setOnConfirm(() => {
      // console.log("OKKKKKKKKKK");
      App.store.mutations.addCart(product, 1);
      App.contollers.renderSnackbar();
    });
  },
};
