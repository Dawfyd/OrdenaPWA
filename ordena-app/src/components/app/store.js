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
  data_tables: [
    { id: 1, state_table: 1, number: 1, id_service: 1 },
    { id: 2, state_table: 2, number: 2, id_service: 1 },
  ],
  spots: [
    //data_tables
    {
      id_spot: 1, //id
      state_spot: 2, //state_table
      name_spot: "casinni",
      number_spot: 1, // number
      id_venue: 1,
      id_service: 1,
    },
    {
      id_spot: 2, //id
      state_spot: 1, //state_table
      name_spot: "casinni2",
      number_spot: 2, // number
      id_venue: 1,
      id_service: 1,
    },
  ],
  orders: [
    {
      id_order: 1, // id
      price_order: 24500, //total_price
      state_order: false, //state_paid
      id_person: 1, //id_user
      id_spot: 1, //id_table
      cashier_display: false,
    },
    {
      id_order: 2, // id
      price_order: 56000, //total_price
      state_order: false, //state_paid
      id_person: 2, //id_user
      id_spot: 2, //id_table
      cashier_display: false,
    },
    {
      id_order: 3, // id
      price_order: 20000, //total_price
      state_order: false, //state_paid
      id_person: 3, //id_user
      id_spot: 1, //id_table
      cashier_display: false,
    },
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
  requests: [
    //data_products
    {
      id_request: 1, //id
      unit_request: 1, // unid_item
      comentary_request: "Con muchas salsas",
      state_served_request: true, //state_served
      state_paid_request: false,
      addition_request: "",
      modifier_request: "",
      id_product: 1,
      id_order: 1,
      id_spot: 1, //id_table
      state_button: false,
      state_check: false,
    },
    {
      id_request: 2, //id
      unit_request: 1, // unid_item
      comentary_request: "Con muchas salsas",
      state_served_request: false, //state_served
      state_paid_request: false,
      addition_request: "",
      modifier_request: "",
      id_product: 1,
      id_order: 3,
      id_spot: 1, //id_table
      state_button: false,
      state_check: false,
    },
    {
      id_request: 3, //id
      unit_request: 1, // unid_item
      comentary_request: "Con muchas salsas",
      state_served_request: true, //state_served
      state_paid_request: false,
      addition_request: "",
      modifier_request: "",
      id_product: 1,
      id_order: 2,
      id_spot: 2, //id_table
      state_button: false,
      state_check: false,
    },
  ],
  products: [
    {
      id_product: 1,
      id_category: 3,
      name_product: "Hamburguesa Doble",
      description_product:
        "Hamburguesa doble carne angus 400g, salsa de la casa",
      image_product: foto_1,
      state_product: true,
      type_product: "",
      code_product: "",
    },
  ],
  prices: [
    {
      id_price: 1,
      value_price: 20000,
      currency: "COP",
      id_product: 1,
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
  persons: [
    {
      id_person: 1,
      username: "Jane Cooper",
      photo_person: jane,
      id_spot: 1,
    },
    {
      id_person: 2,
      username: "David Hoyos",
      photo_person:
        "https://lh3.googleusercontent.com/a-/AOh14GhYx-n5PDPFGmemzdi06rBLEpQt1Rc7y0iI93ZwzA=s96-c",
      id_spot: 1,
    },
    {
      id_person: 3,
      username: "Robert Fox",
      photo_person: robert,
      id_spot: 1,
    },
    {
      id_person: 4,
      username: "Darrell Steward",
      photo_person: darrell,
      id_spot: 1,
    },
    {
      id_person: 5,
      username: "Kathryn Murphy",
      photo_person: kathryn,
      id_spot: 1,
    },
    {
      id_person: 6,
      username: "Leslie Alexander",
      photo_person:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      id_spot: 1,
    },
    {
      id_person: 7,
      username: "Cameron Williamson",
      photo_person: cameron,
      id_spot: 1,
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
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SHOW_ORDER":
      return {
        ...state,
        showOrder: state.showOrder === true ? false : true,
      };
    case "ORDER_READY":
      const index_order = state.requests.findIndex(
        (requests) => requests.id_request === action.id_ready
      );
      const newArray_order = [...state.requests];
      newArray_order[index_order].state_served_request = true;
      return {
        ...state,
        requests: newArray_order,
      };
    case "CLICK_TABLE":
      return {
        ...state,
        select_table: action.select_table,
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
        (requests) => requests.id_request === action.button_display
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
    case "CLICK_ITEM":
      const index_item = state.requests.findIndex(
        (requests) => requests.id_request === action.check_id
      );

      const newArray_item = [...state.requests];

      if (newArray_item[index_item].state_check === false) {
        newArray_item[index_item].state_check = true;
      } else {
        newArray_item[index_item].state_check = false;
      }

      return {
        ...state,
        requests: newArray_item,
      };
    case "CLICK_USER_DETAILS":
      const index_details = state.orders.findIndex(
        (orders) => orders.id_order === action.user_id
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
    case "CLICK_PAID":
      const index_paid = state.orders.findIndex(
        (orders) => orders.id_order === action.user_paid
      );

      const newArray_paid = [...state.orders];

      newArray_paid[index_paid].state_order = true;

      return {
        ...state,
        orders: newArray_paid,
      };
    default:
      return state;
  }
};

export default createStore(reducer);
