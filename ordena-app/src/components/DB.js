const arrays = {
  spot: [
    {
      id_spot: 1,
      headqueaters_id: 33,
      state_spot: 1,
      name_spot: "cassini",
      number_spot: 1
    },
    {
      id_spot: 2,
      headqueaters_id: 33,
      state_spot: 3,
      name_spot: "cassini2",
      number_spot: 2
    }
  ],

  order: [
    {
      id_order: 1,
      price_order: 25000,
      state_order: false,
      id_spot: 1,
      id_person: 1
      //cashier_display: false,//
    },
    {
      id_order: 2,
      price_order: 56000,
      state_order: false,
      id_spot: 1,
      id_person: 2
      //cashier_display: false,//
    }
  ],
  register: [
    {
      id_register: 1,
      unit_register: 1,
      comentary_register: "porfa partida a la mitad",
      id_product: 1,
      id_order: 1,
      state_served: true

      //state_button: false,//
      //state_check: false,//
    }
  ],
  product: [
    {
      id_product: 1,
      name_product: "Hamburguesa Doble",
      description_product:
        "Hamburguesa doble carne angus 400g, salsa de la casa",
      image_product: "urlphoto",
      id_category: 3,
      state_product: true,
      type_product: "B",
      code_product: "0"
      //state_button(cambiar button por otra cosa): false,//
      //alt: "Foto de {name_product}",
    },
    {
      id_product: 2,
      name_product: "Tocineta",
      description_product: "50 gr",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "C",
      code_product: "3"
      //state_button(cambiar button por otra cosa): false,//
      //alt: "Foto de {name_product}",
    },
    {
      id_product: 3,
      name_product: "Queso Americano",
      description_product: "10 gr",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "P",
      code_product: "1"
    },
    {
      id_product: 4,
      name_product: "Salsa de la casa",
      description_product: " ",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "T",
      code_product: "0"
    },
    {
      id_product: 5,
      name_product: "Salsa Buffalo",
      description_product: " ",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "C",
      code_product: "3"
    },
    {
      id_product: 6,
      name_product: "Carne Angus",
      description_product: "200 gr",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "P",
      code_product: "1"
    },
    {
      id_product: 7,
      name_product: "Papas Fritas",
      description_product:
        "Deliciosas papas bien crujientes, fritas en aceite de olvia extra virgen",
      image_product: "_url_papas_fritas",
      id_category: 2,
      state_product: true,
      type_product: "B",
      code_product: "0"
    },
    {
      id_product: 8,
      name_product: "Dedos de queso",
      description_product:
        "Exquisitos dedos de queso al horno, con especias finas",
      image_product: "_url_dedos_queso",
      id_category: 2,
      state_product: true,
      type_product: "B",
      code_product: "0"
    },
    {
      id_product: 9,
      name_product: "Empanadas Vallunas",
      description_product:
        "Deliciosas empanadas fritas en aceite de palma, con aji al gusto",
      image_product: "_url_empanadas_vallunas",
      id_category: 2,
      state_product: true,
      type_product: "B",
      code_product: "0"
    },
    {
      id_product: 10,
      name_product: "Bandeja Paisa",
      description_product:
        "Deliciosa bandeja paisa, con frijoles, chorizo, huevo frito, arroz, chicharron y aguacate",
      image_product: "_url_bandeja_paisa",
      id_category: 3,
      state_product: true,
      type_product: "B",
      code_product: "0"
    },
    {
      id_product: 11,
      name_product: "Cerveza ClubColombia",
      description_product:
        "Cerveza nacional, con 3 sabores distintos; Roja, Dorada y Negra",
      image_product: "_url_cerveza_club",
      id_category: 5,
      state_product: true,
      type_product: "B",
      code_product: "0"
    },
    {
      id_product: 12,
      name_product: "Juego de Naranja",
      description_product:
        "Jugo natural recien exprimido con 1 parte de agua y 2 de fruta.",
      image_product: "_url_juego_naranja",
      id_category: 4,
      state_product: true,
      type_product: "B",
      code_product: "0"
    },
    {
      id_product: 13,
      name_product: "Brownie con helado",
      description_product:
        "Exquisito brownie con helado al gusto, y salsa de chocolate por encima",
      image_product: "_url_bandeja_paisa",
      id_category: 6,
      state_product: true,
      type_product: "B",
      code_product: "0"
    }
  ],
  Mods: [
    {
      id_Mod: 1,
      name_Mod: "Cebolla",
      state_Mod: true,
      id_product: 1,
      type_Mod: "C",
      code_Mod: "3",
      optional_mod: true,
      string_Mod: " "
    },
    {
      id_Mod: 2,
      name_Mod: "Tomate",
      state_Mod: true,
      id_product: 1,
      type_Mod: "C",
      code_Mod: "3",
      optional_mod: true,
      string_Mod: " "
    },
    {
      id_Mod: 3,
      name_Mod: "Lechuga",
      state_Mod: true,
      id_product: 1,
      type_Mod: "C",
      code_Mod: "3",
      optional_mod: true,
      string_Mod: " "
    },
    {
      id_Mod: 4,
      name_Mod: "Salsa de tomate",
      state_Mod: true,
      id_product: 1,
      type_Mod: "T",
      code_Mod: "0",
      optional_mod: true,
      string_Mod: " "
    },
    {
      id_Mod: 5,
      name_Mod: "Termino de carne",
      state_Mod: true,
      id_product: 1,
      type_Mod: "C",
      code_Mod: "3",
      optional_mod: false,
      string_Mod: "Medio (1/2),Tres cuartos (3/4),Bien asado"
    },
    {
      id_Mod: 6,
      name_Mod: "Sabor de helado",
      state_Mod: true,
      id_product: 13,
      type_Mod: "P",
      code_Mod: "13",
      optional_mod: false,
      string_Mod: "Chocolate, Vainilla, Fresa"
    },
    {
      id_Mod: 7,
      name_Mod: "Salsa de chocolate",
      state_Mod: true,
      id_product: 13,
      type_Mod: "P",
      code_Mod: "13",
      optional_mod: true,
      string_Mod: " "
    }
  ],
  price: [
    {
      id_price: 1,
      id_product: 1,
      id_add: 0,
      value_price: 22000,
      currency: "COP",
      option_price: 1
    },
    {
      id_price: 2,
      id_product: 2,
      id_add: 0,
      value_price: 26000,
      currency: "COP",
      option_price: 1
    },
    {
      id_price: 3,
      id_product: 0,
      id_add: 1,
      value_price: 3000,
      currency: "COP",
      option_price: 2
    }
  ],
  register_add: []
};
