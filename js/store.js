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

  mutations: {},

  actions: {},
};

// non persistant memory
