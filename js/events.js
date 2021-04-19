const events = {
  buyHandler(product) {
    // console.log("buy", product);

    const el = document.createElement("div");
    el.innerHTML = `
      <div>${product.name}</div>
      <div>${product.price}</div>
      <div>${product.stock}</div>`;

    App.modal.show(el);
    App.modal.setOnConfirm(() => {
      // console.log("OKKKKKKKKKK");
      App.store.mutations.addCart(product, 1);
    });
  },
};
