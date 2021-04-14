const store = {
  state: {
    list: [
      {
        id: 1,
        name: "chocolate",
        price: 2,
        description: "the best cholocate in town",
        stock: 20,
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg",
          "https://cdn.shopify.com/s/files/1/0165/0891/1670/products/zaku_01_1200x.jpg?v=1614763585",
        ],
      },
      {
        id: 2,
        name: "kitkat",
        price: 5,
        description: "kit kat",
        stock: 20,
        images: [
          "https://media.istockphoto.com/photos/male-hands-breaking-open-baked-bread-in-half-picture-id1126687472?s=612x612",
          "https://image.shutterstock.com/image-photo/freshly-baked-delicious-bread-on-600w-420604306.jpg",
        ],
      },
      {
        id: 3,
        name: "meiji",
        price: 3,
        description: "meiji",
        stock: 20,
        images: [
          "https://www.amazon.co.jp/images/I/6135I4rEcJL._AC_SL1200_.jpg",
        ],
      },
    ],
  },

  mutations: {},

  actions: {},
};

// non persistant memory
