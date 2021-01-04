import {createStore} from 'redux'
import foto from '../../assets/images/tarjets/Image.svg';
import kathryn from '../../assets/images/avatars/kathryn.png';
import robert from '../../assets/images/avatars/robert.png';
import cameron from '../../assets/images/avatars/cameron.png';
import darrell from '../../assets/images/avatars/darrell.png';
import jane  from '../../assets/images/avatars/jane.png';
import foto_1 from '../../assets/images/tarjets/hamburguesa.jpg';


const initialState = {
  menu: [],
  navegador:[],
  posts:[
      {id: 1, text: 'Menú'},
      {id: 2, text: 'Favoritos'},
      {id: 3, text: 'Entradas'},
      {id: 4, text: 'Platos Fuertes'},
      {id: 5, text: 'Para Compartir'},
      {id: 6, text: 'Bebidas'},
  ],
  categorys_menu:[
      {id: 1, text: 'Descuentos'},
      {id: 2, text: 'Favoritos'},
      {id: 3, text: 'Entradas'},
      {id: 4, text: 'Platos Fuertes'},
      {id: 5, text: 'Para Compartir'},
      {id: 6, text: 'Bebidas'},
  ],
  data_tables: [
     {id: 1,
     state_table: 1,
     number: 1,
     //id_service: 1,
     },
     {id: 2,
     state_table: 2,
     number: 2,
     //id_service: 1,
     },
  ],
  data_order:[
     {
     id: 1,
     id_table: 1,
     id_user: 1,
     total_price: 24500,
     state_paid: false,
     },
     {id: 2,
     id_table: 2,
     id_user: 2,
     total_price: 56000,
     state_paid: false,
     },
  ],
  data_products:[
    {id: 1,
    product: 'Hamburguesa Doble super mega hiper doble con triple carne de serpiente',
    unit_item: 1,
    price_item: 22000,
    state_served: true,
    id_order:1,
    state_button: false,
    },
    {id: 2,
    product: 'Hamburguesa Americana',
    unit_item: 1,
    price_item: 26000,
    state_served: true,
    id_order:2,
    state_button: false,
    },
    {id: 3,
    product: 'Adicion Tocineta',
    unit_item: 1,
    price_item: 3000,
    state_served: true,
    id_order:2,
    state_button: false,
    },
    {id: 4,
    product: 'Coca Cola',
    unit_item: 2,
    price_item: 5000,
    state_served: true,
    id_order:2,
    state_button: false,
    },
    {id: 5,
    product: 'Perro Mexicano',
    unit_item: 1,
    price_item: 22000,
    state_served: false,
    id_order:2,
    state_button: false,
    },
    {id: 6,
    product: 'Manzana Postobon',
    unit_item: 1,
    price_item: 2500,
    state_served: false,
    id_order:1,
    state_button: false,
    },
  ],
  data_user: [
    {id: 1,
    name: 'Jane Cooper',
    icon: jane,
    //id_table: 1,
    },
    {id: 2,
    name: 'David Hoyos',
    icon: "https://lh3.googleusercontent.com/a-/AOh14GhYx-n5PDPFGmemzdi06rBLEpQt1Rc7y0iI93ZwzA=s96-c",
    //id_table: 1,
    },
    {id: 3,
    name: 'Robert Fox',
    icon: robert,
    //id_table: 1,
    },
    {id: 4,
    name: 'Darrell Steward',
    icon: darrell,
    //id_table: 1,
    },
    {id: 5,
    name: 'Kathryn Murphy',
    icon: kathryn,
    //id_table: 1,
    },
    {id: 6,
    name: 'Leslie Alexander',
    icon: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    //id_table: 1,
    },
    {id: 7,
    name: 'Cameron Williamson',
    icon: cameron,
    //id_table: 1,
    },
  ],
  data_menu:[
    {id: 1,
    category:3,
    id_fav:true,
    id_desc:true,
    state_button:false,
    unit_item:0,
    product: 'Hamburguesa Doble',
    msg: 'Hamburguesa doble carne angus 400g, salsa de la casa',
    price: 18500,
    price_d:17000,
    alt: 'Foto de una Hamburguesa con queso',
    photo: foto_1
    },
    {id: 2,
    category:2,
    id_fav:false,
    id_desc:false,
    state_button:false,
    unit_item:0,
    product: 'Papas Fritas',
    msg: 'Deliciosas papas bien crujientes, fritas en aceite de olvia extra virgen',
    price: 20000,
    alt: 'Foto de Papas fritas con paprica y sal',
    photo: foto
    },
    {id: 3,
    category:2,
    id_fav:true,
    id_desc:false,
    state_button:false,
    unit_item:0,
    product: 'Dedos de queso',
    msg: 'Exquisitos dedos de queso al horno, con especias finas',
    price: 30000,
    alt: 'Foto de 4 dedos de queso en una canastica',
    photo: foto
    },
    {id: 4,
    category:2,
    id_fav:false,
    id_desc:false,
    state_button:false,
    unit_item:0,
    product: 'Empanadas Vallunas',
    msg: 'Deliciosas empanadas fritas en aceite de palma, con aji al gusto',
    price: 17000,
    alt: 'Foto de 4 empanadas en una canasta',
    photo: foto
    },
    {id: 5,
    category:3,
    id_fav:false,
    id_desc:false,
    state_button:false,
    unit_item:0,
    product: 'Bandeja Paisa',
    msg: 'Deliciosa bandeja paisa, con frijoles, chorizo, huevo frito, arroz, chicharron y aguacate',
    price: 12000,
    alt: 'Foto de 4 empanadas en una canasta',
    photo: foto
    },
    {id: 6,
    category:5,
    id_fav:false,
    id_desc:false,
    state_button:false,
    unit_item:0,
    product: 'Cerveza ClubColombia',
    msg: 'Cerveza nacional, con 3 sabores distintos; Roja, Dorada y Negra',
    price: 7000,
    alt: 'Foto de 4 empanadas en una canasta',
    photo: foto
    },
    {id: 7,
    category:5,
    id_fav:false,
    id_desc:false,
    state_button:false,
    unit_item:0,
    product: 'Jugo de Naranja',
    msg: 'Jugo natural recien exprimido con 1 parte de agua y 2 de fruta.',
    price: 9000,
    alt: 'Foto de 4 empanadas en una canasta',
    photo: foto
    },
  ],
  select_table:1,
  showMenu: true,
  data_menu_f: [],
  id_category:0,
  id_food:0,
  show_food: [],
  temp_menu: [],
  ud_cart:0,
  price_cart:0,
  show_cart: false,
  showOrder: false,
  count_resume:0,
  price_resume:0,
  temp_category: 0,
  alt_food:[
    {id:1,
    id_alt:2,
    name:'Sal'
    },
    {id:2,
    id_alt:2,
    name:'Pimienta'
    },
    {id:3,
    id_alt:1,
    name:'Tomate'
    },
    {id:4,
    id_alt:1,
    name:'Lechuga'
    },
  ],
  opt_food: [
    {id:1,
    id_opt: 1,
    name:'Medio (1/2)'
    },
    {id:2,
    id_opt: 1,
    name:'Tres cuartos (3/4)'
    },
    {id:3,
    id_opt: 1,
    name:'Bien asado'
    },
  ],
  adds:[
    {id:1,
    id_add:1,
    name:'Salsa de tomate'
    },
    {id:2,
    id_add:1,
    name:'Papas fritas'
    },
    {id:3,
    id_add:1,
    name:'Aros de cebolla'
    },
  ],
  orderList:[],

}

const reducer = (state = initialState, action) => {
console.log(action)
switch (action.type) {
  case 'SHOW_ORDER':
    return{
        ...state,
        showOrder: state.showOrder === true ? false: true,
    }
  case 'SHOW_MENU':
      return{
          ...state,
          showOrder: state.showOrder === true ? false: true,
      }
  case 'ORDER_READY':
    const index = state.data_products.findIndex(data_products => data_products.id === action.id_ready);

    const newArray = [...state.data_products];

    newArray[index].state_served = true

    return {
      ...state,
      data_products: newArray,

    }
  case 'CLICK_TABLE':
    return {
      ...state,
      select_table: action.select_table,
    }
  case 'SHOW_DISH':
    return{
      ...state,
      showMenu: action.showMenu,
      show_food: state.data_menu.filter(d => d.id === action.id_food),
      id_food: action.id_food,

    }
  case 'SELECT_CATEGORY':
      return{
        ...state,
        id_category: action.id_category,
        data_menu_f: state.data_menu.filter(d => d.category === action.id_category),
        showMenu: action.showMenu,
      }
  case 'ADD_FOOD':
      return{
        ...state,
        show_cart: action.show_cart,
        orderList: state.orderList.concat(state.show_food),
        count_resume: state.count_resume + action.count_resume,
        price_resume: state.price_resume + action.price_resume,
        

      }
  case 'DISPLAY_BUTTON':

      const index2 = state.data_products.findIndex(data_products => data_products.id === action.button_display);

      const newArray2 = [...state.data_products];

      if (newArray2[index2].state_button === false) {
        newArray2[index2].state_button = true
      } else {
        newArray2[index2].state_button = false
      }
     return{
       ...state,
       data_products: newArray2

      }
  default:
   return state;
  }
}

export default createStore(reducer)
