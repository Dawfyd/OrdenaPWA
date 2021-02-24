import { createStore } from "redux";
import foto from "../../assets/images/tarjets/Image.svg";
import kathryn from "../../assets/images/avatars/kathryn.png";
import robert from "../../assets/images/avatars/robert.png";
import cameron from "../../assets/images/avatars/cameron.png";
import darrell from "../../assets/images/avatars/darrell.png";
import jane from "../../assets/images/avatars/jane.png";
import foto_1 from "../../assets/images/tarjets/hamburguesa.jpg";

const initialState = {
  services: [
    {
      id_service: 1,
      alias_service: "Rodriguez",
      id_venue: 1,
    },
  ],

  posts: [
    { id: 1, text: "Menú" },
    { id: 2, text: "Favoritos" },
    { id: 3, text: "Entradas" },
    { id: 4, text: "Platos Fuertes" },
    { id: 5, text: "Para Compartir" },
    { id: 6, text: "Bebidas" },
  ],
  categorys_menu: [
    { id: 1, text: "Descuentos" },
    { id: 2, text: "Favoritos" },
    { id: 3, text: "Entradas" },
    { id: 4, text: "Platos Fuertes" },
    { id: 5, text: "Para Compartir" },
    { id: 6, text: "Bebidas" },
  ],
  categorys: [
    { id: 1, name_category: "Adicionales", state_category: true, menu_id: 1 },
    { id: 2, name_category: "Modificadores", state_category: true, menu_id: 1 },

    { id: 3, name_category: "Entradas", state_category: true, menu_id: 1 },
    {
      id: 4,
      name_category: "Platos Fuertes",
      state_category: true,
      menu_id: 1,
    },
    {
      id: 5,
      name_category: "Para Compartir",
      state_category: true,
      menu_id: 1,
    },
    { id: 6, name_category: "Bebidas", state_category: true, menu_id: 1 },
    { id: 7, name_category: "Licores", state_category: true, menu_id: 1 },
    { id: 8, name_category: "Postres", state_category: true, menu_id: 1 },
  ],

  products: [
    {
      id: 1,
      name: "Hamburguesa Doble",
      description: "Hamburguesa doble carne angus 400g, salsa de la casa",
      image: "urlphoto",
      state: true,
      product_type_id: "",
      //state_button(cambiar button por otra cosa): false,//
      //alt: "Foto de {name_product}",
      id_product: 1,
      name_product: "Hamburguesa Doble",
      description_product:
        "Hamburguesa doble carne angus 400g, salsa de la casa",
      image_product: "urlphoto",
      id_category: 4,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 2,
      name: "Tocineta",
      description: "50 gr",
      image: " ",
      state: true,
      product_type_id: "",
      //state_button(cambiar button por otra cosa): false,//
      //alt: "Foto de {name_product}",
      id_product: 2,
      name_product: "Tocineta",
      description_product: "50 gr",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "C",
      code_product: "3",
    },
    {
      id: 3,
      name: "Queso Americano",
      description: "10 gr",
      image: " ",
      state: true,
      product_type_id: "",
      id_product: 3,
      name_product: "Queso Americano",
      description_product: "10 gr",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "P",
      code_product: "1",
    },
    {
      id: 4,
      name: "Salsa de la casa",
      description: " ",
      image: " ",
      state: true,
      product_type_id: "",

      id_product: 4,
      name_product: "Salsa de la casa",
      description_product: " ",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "T",
      code_product: "0",
    },
    {
      id: 5,
      name: "Salsa Buffalo",
      description: " ",
      image: " ",
      state: true,
      product_type_id: "",

      id_product: 5,
      name_product: "Salsa Buffalo",
      description_product: " ",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "C",
      code_product: "3",
    },
    {
      id: 6,
      name: "Carne Angus",
      description: "200 gr",
      image: " ",
      state: true,
      product_type_id: "",

      id_product: 6,
      name_product: "Carne Angus",
      description_product: "200 gr",
      image_product: " ",
      id_category: 1,
      state_product: true,
      type_product: "P",
      code_product: "1",
    },
    {
      id: 7,
      name: "Papas Fritas",
      description:
        "Deliciosas papas bien crujientes, fritas en aceite de olvia extra virgen",
      image: "_url_papas_fritas",
      state: true,
      product_type_id: "",

      id_product: 7,
      name_product: "Papas Fritas",
      description_product:
        "Deliciosas papas bien crujientes, fritas en aceite de olvia extra virgen",
      image_product: "_url_papas_fritas",
      id_category: 3,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 8,
      name: "Dedos de queso",
      description: "Exquisitos dedos de queso al horno, con especias finas",
      image: "_url_dedos_queso",
      state: true,
      product_type_id: "",

      id_product: 8,
      name_product: "Dedos de queso",
      description_product:
        "Exquisitos dedos de queso al horno, con especias finas",
      image_product: "_url_dedos_queso",
      id_category: 3,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 9,
      name: "Empanadas Vallunas",
      description:
        "Deliciosas empanadas fritas en aceite de palma, con aji al gusto",
      image: "_url_empanadas_vallunas",
      state: true,
      product_type_id: "",

      id_product: 9,
      name_product: "Empanadas Vallunas",
      description_product:
        "Deliciosas empanadas fritas en aceite de palma, con aji al gusto",
      image_product: "_url_empanadas_vallunas",
      id_category: 3,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 10,
      name: "Bandeja Paisa",
      description:
        "Deliciosa bandeja paisa, con frijoles, chorizo, huevo frito, arroz, chicharron y aguacate",
      image: "_url_bandeja_paisa",
      state: true,
      product_type_id: "",

      id_product: 10,
      name_product: "Bandeja Paisa",
      description_product:
        "Deliciosa bandeja paisa, con frijoles, chorizo, huevo frito, arroz, chicharron y aguacate",
      image_product: "_url_bandeja_paisa",
      id_category: 4,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 11,
      name: "Cerveza ClubColombia",
      description:
        "Cerveza nacional, con 3 sabores distintos; Roja, Dorada y Negra",
      image: "_url_cerveza_club",
      state: true,
      product_type_id: "",

      id_product: 11,
      name_product: "Cerveza ClubColombia",
      description_product:
        "Cerveza nacional, con 3 sabores distintos; Roja, Dorada y Negra",
      image_product: "_url_cerveza_club",
      id_category: 7,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 12,
      name: "Juego de Naranja",
      description:
        "Jugo natural recien exprimido con 1 parte de agua y 2 de fruta.",
      image: "_url_juego_naranja",
      state: true,
      product_type_id: "",

      id_product: 12,
      name_product: "Juego de Naranja",
      description_product:
        "Jugo natural recien exprimido con 1 parte de agua y 2 de fruta.",
      image_product: "_url_juego_naranja",
      id_category: 6,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
    {
      id: 13,
      name: "Brownie con helado",
      description:
        "Exquisito brownie con helado al gusto, y salsa de chocolate por encima",
      image: "_url_bandeja_paisa",
      state: true,
      product_type_id: "",

      id_product: 13,
      name_product: "Brownie con helado",
      description_product:
        "Exquisito brownie con helado al gusto, y salsa de chocolate por encima",
      image_product: "_url_bandeja_paisa",
      id_category: 8,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
  ],
  prices: [
    {
      id: 1,
      value: 12000,
      currency: "COP",
      option: 1,
      product_id: 1,
      //state_button(cambiar button por otra cosa): false,//
      //alt: "Foto de {name_product}",

      id_price: 1,
      value_price: 12000,

      option_price: 1,
    },
    {
      id: 2,
      value: 5000,
      currency: "COP",
      option: 1,
      product_id: 2,
      //state_button(cambiar button por otra cosa): false,//
      //alt: "Foto de {name_product}",
      id_price: 2,
      value_price: 5000,
      option_price: 1,
    },
    {
      id: 3,
      value: 3000,
      currency: "COP",
      option: 1,
      product_id: 3,
      id_price: 3,
      value_price: 3000,

      option_price: 1,
    },
    {
      id: 4,
      value: 500,
      currency: "COP",
      option: 1,
      product_id: 4,
      id_price: 4,
      value_price: 500,
      option_price: 1,
    },
    {
      id: 5,
      value: 500,
      currency: "COP",
      option: 1,
      product_id: 5,

      id_price: 5,
      value_price: 500,
      option_price: 1,
    },
    {
      id: 6,
      value: 6000,
      currency: "COP",
      option: 1,
      product_id: 6,

      id_price: 6,
      value_price: 6000,
      option_price: 1,
    },
    {
      id: 7,
      value: 4000,
      currency: "COP",
      option: 1,
      product_id: 7,

      id_price: 7,
      value_price: 4000,
      option_price: 1,
    },
    {
      id: 8,
      value: 8000,
      currency: "COP",
      option: 1,
      product_id: 8,

      id_price: 8,
      value_price: 8000,
      option_price: 1,
    },
    {
      id: 9,
      value: 6000,
      currency: "COP",
      option: 1,
      product_id: 9,

      id_price: 9,
      value_price: 6000,

      option_price: 1,
    },
    {
      id: 10,
      value: 18000,
      currency: "COP",
      option: 1,
      product_id: 10,

      id_price: 10,
      value_price: 18000,
      option_price: 1,
    },
    {
      id: 11,
      value: 5000,
      currency: "COP",
      option: 1,
      product_id: 11,

      id_price: 11,
      value_price: 5000,

      option_price: 1,
    },
    {
      id: 12,
      value: 4000,
      currency: "COP",
      option: 1,
      product_id: 12,

      id_price: 12,
      value_price: 4000,

      option_price: 1,
    },
    {
      id: 13,
      value: 9000,
      currency: "COP",
      option: 1,
      product_id: 13,

      id_price: 13,
      value_price: 9000,
      option_price: 1,
    },
  ],

  spots: [
    //data_tables
    {
      id: 1, //id
      state: 2, //state_table
      name: "casinni",
      number: 1, // number
      venue_id: 1,
    },
    {
      id: 2, //id
      state: 1, //state_table
      name: "casinni2",
      number: 2, // number
      venue_id: 1,
    },
    {
      id: 3, //id
      state: 1, //state_table
      name: "casinni2",
      number: 3, // number
      venue_id: 1,
    },
  ],
  orders: [
    {
      id: 1, // id
      price: 24500, //total_price
      state: false, //state_paid
      person_id: 1, //id_user
      spot_id: 1, //id_table
      cashier_display: false,
    },
    {
      id: 2, // id
      price: 56000, //total_price
      state: false, //state_paid
      person_id: 2, //id_user
      spot_id: 1, //id_table
      cashier_display: false,
    },
    {
      id: 3, // id
      price: 20000, //total_price
      state: false, //state_paid
      person_id: 3, //id_user
      spot_id: 1, //id_table
      cashier_display: false,
    },
  ],

  requests: [
    //data_products
    {
      id: 1, //id
      unit: 1, // unid_item
      comentary: "Con muchas salsas",
      state: 3, //state_served
      product_id: 1,
      order_id: 1,
      spot_id: 1, //id_table
      state_button: false,
      state_check: false,
    },
    {
      id: 2, //id
      unit: 1, // unid_item
      comentary: "Con muchas salsas",
      state: 2, //state_served
      product_id: 10,
      order_id: 2,
      spot_id: 1, //id_table
      state_button: false,
      state_check: false,
    },
    {
      id: 3, //id
      unit: 1, // unid_item
      comentary: "Con muchas salsas",
      state: 2, //state_serveds
      product_id: 7,
      order_id: 3,
      spot_id: 1, //id_table
      state_button: false,
      state_check: false,
    },
  ],

  persons: [
    {
      id: 1,
      username: "Jane Cooper",
      photo: jane,
      spot_id: 1,
    },
    {
      id: 2,
      username: "David Hoyos",
      photo:
        "https://lh3.googleusercontent.com/a-/AOh14GhYx-n5PDPFGmemzdi06rBLEpQt1Rc7y0iI93ZwzA=s96-c",
      spot_id: 1,
    },
    {
      id: 3,
      username: "Robert Fox",
      photo: robert,
      spot_id: 1,
    },
    {
      id: 4,
      username: "Darrell Steward",
      photo: darrell,
      spot_id: 1,
    },
    {
      id: 5,
      username: "Kathryn Murphy",
      photo: kathryn,
      spot_id: 1,
    },
    {
      id: 6,
      username: "Leslie Alexander",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      spot_id: 1,
    },
    {
      id: 7,
      username: "Cameron Williamson",
      photo: cameron,
      spot_id: 1,
    },
  ],
  data_tables: [
    { id: 1, state_table: 1, number: 1, id_service: 1 },
    { id: 2, state_table: 2, number: 2, id_service: 1 },
  ],
  data_order: [
    {
      id: 1,
      id_table: 1,
      id_user: 1,
      total_price: 24500,
      state_paid: false,
      cashier_display: false,
    },
    {
      id: 2,
      id_table: 2,
      id_user: 2,
      total_price: 56000,
      state_paid: false,
      cashier_display: false,
    },
    {
      id: 3,
      id_table: 1,
      id_user: 3,
      total_price: 20000,
      state_paid: false,
      cashier_display: false,
    },
  ],
  data_products: [
    {
      id: 1,
      product:
        "Hamburguesa Doble super mega hiper doble con triple carne de serpiente",
      unit_item: 1,
      price_item: 22000,
      state_served: true,
      id_order: 1,
      id_table: 1,
      state_button: false,
      state_check: false,
    },
    {
      id: 2,
      product: "Hamburguesa Americana",
      unit_item: 1,
      price_item: 26000,
      state_served: true,
      id_order: 2,
      id_table: 2,
      state_button: false,
      state_check: false,
    },
    {
      id: 3,
      product: "Adicion Tocineta",
      unit_item: 1,
      price_item: 3000,
      state_served: true,
      id_order: 2,
      id_table: 2,
      state_button: false,
      state_check: false,
    },
    {
      id: 4,
      product: "Coca Cola",
      unit_item: 2,
      price_item: 5000,
      state_served: true,
      id_order: 3,
      id_table: 1,
      state_button: false,
      state_check: false,
    },
    {
      id: 5,
      product: "Perro Mexicano",
      unit_item: 1,
      price_item: 22000,
      state_served: false,
      id_order: 3,
      id_table: 1,
      state_button: false,
      state_check: false,
    },
    {
      id: 6,
      product: "Manzana Postobon",
      unit_item: 1,
      price_item: 2500,
      state_served: false,
      id_order: 1,
      id_table: 1,
      state_button: false,
      state_check: false,
    },
  ],
  data_user: [
    {
      id: 1,
      name: "Jane Cooper",
      icon: jane,

      //id_table: 1,
    },
    {
      id: 2,
      name: "David Hoyos",
      icon:
        "https://lh3.googleusercontent.com/a-/AOh14GhYx-n5PDPFGmemzdi06rBLEpQt1Rc7y0iI93ZwzA=s96-c",

      //id_table: 1,
    },
    {
      id: 3,
      name: "Robert Fox",
      icon: robert,

      //id_table: 1,
    },
    {
      id: 4,
      name: "Darrell Steward",
      icon: darrell,

      //id_table: 1,
    },
    {
      id: 5,
      name: "Kathryn Murphy",
      icon: kathryn,

      //id_table: 1,
    },
    {
      id: 6,
      name: "Leslie Alexander",
      icon: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",

      //id_table: 1,
    },
    {
      id: 7,
      name: "Cameron Williamson",
      icon: cameron,

      //id_table: 1,
    },
  ],
  data_menu: [
    {
      id: 1,
      category: 3,
      id_fav: true,
      id_desc: true,
      state_button: false,
      unit_item: 1,
      product: "Hamburguesa Doble",
      msg: "Hamburguesa doble carne angus 400g, salsa de la casa",
      price: 13500,
      price_d: 12000,
      alt: "Foto de una Hamburguesa con queso",
      photo: foto_1,
    },
    {
      id: 2,
      category: 2,
      id_fav: false,
      id_desc: false,
      state_button: false,
      unit_item: 1,
      product: "Papas Fritas",
      msg:
        "Deliciosas papas bien crujientes, fritas en aceite de olvia extra virgen",
      price: 7000,
      alt: "Foto de Papas fritas con paprica y sal",
      photo: foto,
    },
    {
      id: 3,
      category: 2,
      id_fav: true,
      id_desc: false,
      state_button: false,
      unit_item: 1,
      product: "Dedos de queso",
      msg: "Exquisitos dedos de queso al horno, con especias finas",
      price: 8000,
      alt: "Foto de 4 dedos de queso en una canastica",
      photo: foto,
    },
    {
      id: 4,
      category: 2,
      id_fav: false,
      id_desc: false,
      state_button: false,
      unit_item: 1,
      product: "Empanadas Vallunas",
      msg: "Deliciosas empanadas fritas en aceite de palma, con aji al gusto",
      price: 9000,
      alt: "Foto de 4 empanadas en una canasta",
      photo: foto,
    },
    {
      id: 5,
      category: 3,
      id_fav: false,
      id_desc: false,
      state_button: false,
      unit_item: 1,
      product: "Bandeja Paisa",
      msg:
        "Deliciosa bandeja paisa, con frijoles, chorizo, huevo frito, arroz, chicharron y aguacate",
      price: 7000,
      alt: "Foto de 4 empanadas en una canasta",
      photo: foto,
    },
    {
      id: 6,
      category: 5,
      id_fav: false,
      id_desc: false,
      state_button: false,
      unit_item: 1,
      product: "Cerveza ClubColombia",
      msg: "Cerveza nacional, con 3 sabores distintos; Roja, Dorada y Negra",
      price: 7000,
      alt: "Foto de 4 empanadas en una canasta",
      photo: foto,
    },
    {
      id: 7,
      category: 5,
      id_fav: false,
      id_desc: false,
      state_button: false,
      unit_item: 1,
      product: "Jugo de Naranja",
      msg: "Jugo natural recien exprimido con 1 parte de agua y 2 de fruta.",
      price: 9000,
      alt: "Foto de 4 empanadas en una canasta",
      photo: foto,
    },
  ],

  display_category: true,
  select_table: 1,
  showMenu: true,
  data_menu_f: [],
  id_category: 0,
  id_food: 0,
  show_food: [],
  temp_menu: [],
  ud_cart: 0,
  price_cart: 0,
  show_cart: false,
  showOrder: false,
  count_resume: 0,
  price_resume: 0,
  temp_category: 0,
  create_product: false,
  select_codeqr: 0,
  add_spot: false,
  register_option: 0,

  alt_food: [
    { id: 1, id_alt: 2, name: "Sal" },
    { id: 2, id_alt: 2, name: "Pimienta" },
    { id: 3, id_alt: 1, name: "Tomate" },
    { id: 4, id_alt: 1, name: "Lechuga" },
  ],
  opt_food: [
    { id: 1, id_opt: 1, name: "Medio (1/2)" },
    { id: 2, id_opt: 1, name: "Tres cuartos (3/4)" },
    { id: 3, id_opt: 1, name: "Bien asado" },
  ],
  adds: [
    { id: 1, id_add: 1, name: "Salsa de tomate" },
    { id: 2, id_add: 1, name: "Papas fritas" },
    { id: 3, id_add: 1, name: "Aros de cebolla" },
  ],
  orderList: [],

  favList: [],
  registerList: [],
  modifiers: [
    {
      id_modifier: 1,
      name_modifier: "Cebolla",
      state_modifier: true,
      id_product: 1,
      type_modifier: "P",
      code_modifier: "10,1,4",
      optional_modifier: true,
      string_modifier: " ",
    },
    {
      id_modifier: 2,
      name_modifier: "Tomate",
      state_modifier: true,
      id_product: 1,
      type_modifier: "C",
      code_modifier: "4,3,5,1",
      optional_modifier: true,
      string_modifier: " ",
    },
    {
      id_modifier: 3,
      name_modifier: "Lechuga",
      state_modifier: true,
      id_product: 1,
      type_modifier: "C",
      code_modifier: "3",
      optional_modifier: true,
      string_modifier: " ",
    },
    {
      id_modifier: 4,
      name_modifier: "Salsa de tomate",
      state_modifier: true,
      id_product: 1,
      type_modifier: "T",
      code_modifier: "0",
      optional_modifier: true,
      string_modifier: " ",
    },
    {
      id_modifier: 5,
      name_modifier: "Termino de carne",
      state_modifier: true,
      id_product: 1,
      type_modifier: "C",
      code_modifier: "3",
      optional_modifier: false,
      string_modifier: "Medio (1/2),Tres cuartos (3/4),Bien asado",
    },
    {
      id_modifier: 6,
      name_modifier: "Sabor de helado",
      state_modifier: true,
      id_product: 13,
      type_modifier: "P",
      code_modifier: "13,2,1,10",
      optional_modifier: false,
      string_modifier: "Chocolate, Vainilla, Fresa",
    },
    {
      id_modifier: 7,
      name_modifier: "Salsa de chocolate",
      state_modifier: true,
      id_product: 13,
      type_modifier: "P",
      code_modifier: "13,10,1",
      optional_modifier: true,
      string_modifier: " ",
    },
  ],
  show_mods: false,
  product_temp: [
    {
      id: 0,
      value_price: 0,
      option_price: 1,
      id_product: 1,
      name_product: " ",
      description_product: " ",
      image_product: "#",
      id_category: 3,
      state_product: true,
      type_product: "B",
      code_product: "0",
    },
  ],
  id_create_food: 0,
  actualizar_comp: false,
  create_mods: false,
  show_ads: false,
  create_category: false,
  edit_category: false,
  id_create_category: 0,
  codes_mods_temp: [
    {
      id_modifier: 1,
      type_modifier: "",
      code_modifier: "",
    },
  ],
  codes_mods: [],
  array_u1_temp: [
    {
      id: 0,
      name_modifier: "",
      state_modifier: true,
      id_product: 0,
      type_modifier: "P",
      code_modifier: "",
      optional_modifier: true,
      string_modifier: "",
    },
  ],
  check_ready: false,
  id_spot_register: 0,
  product_created: false,
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "RECEIVE_DATA_1U":
      const array_temp_values = action.array_temp_values;
      const temp_u1_modifiers = [...state.modifiers];
      const length_new_u1 = temp_u1_modifiers.length;
      const id_new_u1 = temp_u1_modifiers[length_new_u1 - 1].id + 1;
      console.log("dataU1", id_new_u1, array_temp_values);
      const local_array_u1_temp = [...state.array_u1_temp];
      local_array_u1_temp[0].id = id_new_u1;
      local_array_u1_temp[0].name_modifier = array_temp_values.name;
      local_array_u1_temp[0].code_modifier = state.id_food.toString();
      console.log("dataU1_2", local_array_u1_temp);
      temp_u1_modifiers.push(local_array_u1_temp[0]);
      console.log("dataU1_3", temp_u1_modifiers);
      return {
        ...state,
        modifiers: temp_u1_modifiers,
      };
    case "RECEIVE_DATA_2A":
      return {
        ...state,
      };
    case "RECEIVE_DATA_3M":
      return {
        ...state,
      };
    case "SWITCH_MODIFIERS":
      return {
        ...state,
        switch_opt_modifier: state.switch_opt_modifier === true ? false : true,
      };
    case "ADD_MODIFIERS":
      const id_temp_3 = action.id_modifiers;
      const arrayTemp_1 = state.modifiers.filter((a) => a.id === id_temp_3);
      const index5 = state.modifiers.findIndex((a) => a.id === id_temp_3);
      const tempType_1 = arrayTemp_1[0].type_modifier;
      if (tempType_1 === "C") {
        const codeTemp_1 = arrayTemp_1[0].code_modifier.split(",");
        const id_category_temp = state.id_category.toString();
        var codeTemp_2 = codeTemp_1.concat(id_category_temp);
        codeTemp_2 = codeTemp_2.join(",");
        arrayTemp_1[0].code_modifier = codeTemp_2;
        console.log(arrayTemp_1);
        const arrayTemp_2 = [...state.modifiers];
        arrayTemp_2[index5] = arrayTemp_1[0];
        console.log(arrayTemp_2);
        return {
          ...state,
          modifiers: arrayTemp_2,
          actualizar_comp: state.actualizar_comp === true ? false : true,
        };
      }
      if (tempType_1 === "P") {
        const codeTemp_3 = arrayTemp_1[0].code_modifier.split(",");
        const id_food_temp = state.id_food.toString();
        var codeTemp_4 = codeTemp_3.concat(id_food_temp);
        codeTemp_4 = codeTemp_4.join(",");
        arrayTemp_1[0].code_modifier = codeTemp_4;
        console.log(arrayTemp_1);
        const arrayTemp_3 = [...state.modifiers];
        arrayTemp_3[index5] = arrayTemp_1[0];
        console.log(arrayTemp_3);
        return {
          ...state,
          modifiers: arrayTemp_3,
          actualizar_comp: state.actualizar_comp === true ? false : true,
        };
      }
    case "EDIT_CATEGORY":
      console.log(state.edit_category);
      return {
        ...state,
        create_category: true,
        id_category: action.id_category,
        edit_category: state.edit_category === false ? true : false,
      };
    case "CREATE_CATEGORY":
      const id_temp_2 = state.categorys.length + 1;
      return {
        ...state,
        create_category: true,
        id_category: action.id_category,
        id_create_food: id_temp_2,
      };
    case "SHOW_ADITIONALS":
      return {
        ...state,
        show_ads: state.show_ads === false ? true : false,
      };
    case "CREATE_MODIFIERS":
      return {
        ...state,
        create_mods: state.create_mods === false ? true : false,
      };
    case "SHOW_MODIFIERS":
      return {
        ...state,
        show_mods: state.show_mods === false ? true : false,
      };

    case "SHOW_CREATE_MODIFIERS":
      return {
        ...state,
        show_create_mods: state.show_create_mods === false ? true : false,
      };
    case "CREATE_PRODUCT_SETUP":
      const id_temp_1 = state.products.length + 1;
      console.log(id_temp_1);
      return {
        ...state,
        create_product: action.create_product,
        id_food: action.id_food,
        id_create_food: id_temp_1,
      };

    case "SELECT_PRODUCT_SETUP":
      console.log(state.actualizar_comp);
      return {
        ...state,
        create_product: action.create_product,
        id_food: action.id_food,
        actualizar_comp: state.actualizar_comp === true ? false : true,
      };
    case "SHOW_ORDER":
      return {
        ...state,
        showOrder: state.showOrder === true ? false : true,
        show_cart: action.show_cart,
      };
    case "ORDER_READY":
      const index_order = state.requests.findIndex(
        (requests) => requests.id === action.id_ready
      );
      const newArray_order = [...state.requests];
      newArray_order[index_order].state = 3;
      return {
        ...state,

        requests: newArray_order,
      };
    case "CLICK_TABLE":
      return {
        ...state,
        select_table: action.select_table,
      };
    case "SELECT_SPOT":
      return {
        ...state,
        select_codeqr: action.select_codeqr,
        add_spot: action.add_spot,
      };

    case "SELECT_SERVICE":
      return {
        ...state,
        select_codeqr: action.select_codeqr,
        add_spot: action.add_spot,
      };
    case "ADD_SPOT":
      return {
        ...state,
        add_spot: action.add_spot,
      };
    case "BACK_MENU":
      return {
        ...state,
        showMenu: action.showMenu,
      };
    case "SHOW_DISH":
      return {
        ...state,
        showMenu: action.showMenu,
        show_food: state.data_menu.filter((d) => d.id === action.id_food),
        id_food: action.id_food,
      };
    case "SELECT_CATEGORY":
      return {
        ...state,
        id_category: action.id_category,
        data_menu_f: state.data_menu.filter(
          (d) => d.category === action.id_category
        ),
        showMenu: action.showMenu,
        id_food: action.id_food,
        create_category: false,
      };
    case "LESS_FOOD":
      const newArray6 = [...state.orderList];
      const index4 = newArray6.findIndex(
        (newArray6) => newArray6.product === action.product_resume
      );
      console.log(index4);
      if (newArray6.length > 1) {
        if (newArray6[index4].unit_item > 1) {
          newArray6[index4].unit_item = newArray6[index4].unit_item - 1;
          return {
            ...state,
            orderList: newArray6,
            count_resume: state.count_resume - action.count_resume,
            price_resume: state.price_resume - action.price_resume,
          };
        } else {
          newArray6.splice(index4, 1);
          return {
            ...state,
            orderList: newArray6,
            count_resume: state.count_resume - action.count_resume,
            price_resume: state.price_resume - action.price_resume,
          };
        }
      } else {
        if (newArray6[index4].unit_item > 1) {
          newArray6[index4].unit_item = newArray6[index4].unit_item - 1;
          return {
            ...state,
            orderList: newArray6,
            count_resume: state.count_resume - action.count_resume,
            price_resume: state.price_resume - action.price_resume,
          };
        } else {
          console.log(newArray6);
          newArray6.splice(index4, 1);
          console.log(newArray6);
          return {
            ...state,
            orderList: newArray6,
            showOrder: action.showOrder,
            show_cart: action.show_cart,
            count_resume: state.count_resume - action.count_resume,
            price_resume: state.price_resume - action.price_resume,
          };
        }
      }
    case "ADD_FOOD":
      const newArray4 = [...state.show_food];
      const newArray5 = [...state.orderList];
      const index3 = newArray5.findIndex(
        (newArray5) => newArray5.product === action.product_resume
      );
      console.log(newArray5, index3, action.product_resume);
      if (newArray5.length > 0) {
        if (index3 === -1) {
          return {
            ...state,
            show_cart: action.show_cart,
            product_resume: action.product_resume,
            orderList: state.orderList.concat(newArray4),
            count_resume: state.count_resume + action.count_resume,
            price_resume: state.price_resume + action.price_resume,
          };
        } else {
          const product_var = newArray5[index3].product;
          if (product_var === action.product_resume) {
            newArray5[index3].unit_item = newArray5[index3].unit_item + 1;
            return {
              ...state,
              orderList: newArray5,
              count_resume: state.count_resume + action.count_resume,
              price_resume: state.price_resume + action.price_resume,
            };
          } else {
            return {
              ...state,
              show_cart: action.show_cart,
              product_resume: action.product_resume,
              orderList: state.orderList.concat(newArray4),
              count_resume: state.count_resume + action.count_resume,
              price_resume: state.price_resume + action.price_resume,
            };
          }
        }
      } else {
        return {
          ...state,
          show_cart: action.show_cart,
          product_resume: action.product_resume,
          orderList: state.orderList.concat(newArray4),
          count_resume: state.count_resume + action.count_resume,
          price_resume: state.price_resume + action.price_resume,
        };
      }
    case "DISPLAY_BUTTON":
      const index_display = state.requests.findIndex(
        (requests) => requests.id === action.button_display
      );

      const newArray_display = [...state.requests];

      if (newArray_display[index_display].state_button === false) {
        newArray_display[index_display].state_button = true;
      } else {
        newArray_display[index_display].state_button = false;
      }
      return {
        ...state,

        requests: newArray_display,
      };
    case "CANCEL_ITEM":
      const index_cancel = state.requests.findIndex(
        (requests) => requests.id === action.check_id
      );

      const newArray_cancel = [...state.requests];

      if (
        newArray_cancel[index_cancel].state === 2 &&
        action.cancel_item === true
      ) {
        newArray_cancel[index_cancel].state = 5;
      } else {
        if (action.cancel_item === true) {
          newArray_cancel[index_cancel].state = 5;
        }
      }

      return {
        ...state,
        requests: newArray_cancel,
      };
    case "CLICK_ITEM":
      const index_item = state.requests.findIndex(
        (requests) => requests.id === action.check_id
      );

      const newArray_item = [...state.requests];

      if (newArray_item[index_item].state === 1) {
        newArray_item[index_item].state = 2;
      } else {
        if (action.cancel_item === true) {
          newArray_item[index_item].state = 5;
        }
      }

      return {
        ...state,
        requests: newArray_item,
      };
    case "CLICK_USER_DETAILS":
      const index_details = state.orders.findIndex(
        (orders) => orders.id === action.user_id
      );

      const newArray_details = [...state.orders];

      if (newArray_details[index_details].cashier_display === false) {
        newArray_details[index_details].cashier_display = true;
      } else {
        newArray_details[index_details].cashier_display = false;
      }

      return {
        ...state,
        orders: newArray_details,
      };

    case "CLICK_REGISTER":
      return {
        ...state,
        display_category: action.display_category,
      };
    case "CLICK_ACCOUNT":
      return {
        ...state,
        display_category: action.display_category,
      };
    case "SELECT_OPTION":
      return {
        ...state,
        register_option: action.register_option,
      };
    case "CLICK_PAID":
      const index_paid = state.orders.findIndex(
        (orders) => orders.id === action.user_paid
      );

      const newArray_paid = [...state.orders];

      newArray_paid[index_paid].state = true;

      return {
        ...state,
        orders: newArray_paid,
      };

    default:
      return state;
  }
};

export default createStore(reducer);
