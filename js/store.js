const store = {
  state: {
    list: [
      {
        id: 1,
        name: "Croissant",
        price: 2,
        description:
          "Lorem ipsum dolor sit amet, <br/>consectetuer adipiscing elit",
        stock: 20,
        images: [
          "https://media.istockphoto.com/photos/breakfast-with-croissants-coffee-orange-juice-and-berries-picture-id1001971972?s=612x612",
          "https://media.istockphoto.com/photos/french-boulangerie-fresh-croissant-for-sale-picture-id629455902?s=612x612",
        ],
      },
      {
        id: 2,
        name: "Rice Flour Bread",
        price: 5,
        description:
          "Lorem ipsum dolor sit amet, <br/>consectetuer adipiscing elit",
        stock: 20,
        images: [
          "https://media.istockphoto.com/photos/fresh-italian-bread-on-a-cutting-board-picture-id158827188?s=612x612",
          "https://media.istockphoto.com/photos/male-hands-breaking-open-baked-bread-in-half-picture-id1126687472?s=612x612",
        ],
      },
      {
        id: 3,
        name: "Rye Bread",
        price: 3,
        description:
          "Lorem ipsum dolor sit amet, <br/>consectetuer adipiscing elit",
        stock: 20,
        images: [
          "https://media.istockphoto.com/photos/loaf-of-rustic-homemade-bread-picture-id895450778?s=612x612",
          "https://media.istockphoto.com/photos/fresh-loaf-of-bread-on-a-cutting-board-and-salt-picture-id1144562350?s=612x612",
        ],
      },
    ],
    myCart: [],
  },

  mutations: {
    loadCart() {
      // Load cart from localStorage.
      const c = localStorage.getItem("cart");
      // console.log(c);

      // if exists
      // 1. Set state.myCart
      // 2. Render cart
      if (c) {
        store.state.myCart = JSON.parse(c);
        // App.contollers.renderCart();
      }
    },

    addCart(product, count) {
      // const products = store.state.list;
      const myCart = store.state.myCart;

      const idx = myCart.findIndex((x) => x.productId === product.id);
      // console.log("idx", idx, myCart[idx]);
      if (idx > -1) {
        // exists
        myCart[idx].count += count;
      } else {
        // create new
        const myProduct = {
          productId: product.id,
          count: count,
          productPrice: product.price,
        };
        myCart.push(myProduct);
      }

      localStorage.setItem("cart", JSON.stringify(myCart));
    },

    removeCart(product, count) {
      console.log("you can remove", product, count);

      const myCart = store.state.myCart;

      for (let i = 0; i < myCart.length; i++) {
        const id = myCart[i].productId;
        if (id === product.id) {
          if (myCart[i].count > 1) {
            myCart[i].count -= count;
          } else {
            const val = myCart[i];
            var index = myCart.indexOf(val);
            myCart.splice(index, 1);

            console.log("elseeeeeee", myCart);

            App.elements.incart.products[product.id].remove();
          }
          App.contollers.renderCart();
          App.contollers.renderFooter();
        }
      }

      localStorage.setItem("cart", JSON.stringify(myCart));
    },
  },

  actions: {},
};
pattern;
// non persistant memory
