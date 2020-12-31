import {createStore} from 'redux'
import foto from '../../assets/images/tarjets/Image.svg';
import kathryn from '../../assets/images/avatars/kathryn.png';
import robert from '../../assets/images/avatars/robert.png';
import cameron from '../../assets/images/avatars/cameron.png';
import darrell from '../../assets/images/avatars/darrell.png';
import jane  from '../../assets/images/avatars/jane.png';


const initialState = {

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
    total_price: 77500,
    state_paid: false,

    },
    {
    id: 2,
    id_table: 2,
    id_user: 2,
    total_price: 20000,
    state_paid: false,
    },

  ],

  data_products:[

    {id: 1,
    product: 'Hamburguesa Doble',
    unit_item: 1,
    price_item: 22000,
    state_served: true,
    id_order:1,
    },
    {id: 2,
    product: 'Hamburguesa Americana',
    unit_item: 1,
    price_item: 26000,
    state_served: true,
    id_order:2,
    },
    {id: 3,
    product: 'Adicion Tocineta',
    unit_item: 1,
    price_item: 3000,
    state_served: true,
    id_order:2,
    },
    {id: 4,
    product: 'Coca Cola',
    unit_item: 2,
    price_item: 5000,
    state_served: true,
    id_order:2,
    },
    {id: 5,
    product: 'Perro Mexicano',
    unit_item: 1,
    price_item: 22000,
    state_served: false,
    id_order:2,
    },
    {id: 6,
    product: 'Manzana Postobon',
    unit_item: 1,
    price_item: 2500,
    state_served: false,
    id_order:1,
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


  data_menu: [
      {id: 1,
      text: 'Hamburguesa Doble',
      msg: 'Hamburguesa doble carne angus 400g, salsa de la casa',
      price: '18,500',
      photo: foto

      },
      {id: 2,
       text: 'Papas Fritas',
       msg: 'Deliciosas papas fritas en aceite de olvia',
       price: '20,000',
       photo: foto

     },
      {id: 3,
       text: 'Dedos de queso',
       msg: 'Exquisitos dedos de queso al horno, con especias finas',
       price: '30,000',
       photo: foto

      },
      {id: 4,
       text: 'Empanadas Vallunas',
       msg: 'Deliciosas empanadas fritas en aceite de palma, con aji al gusto',
       price: '12,000',
       photo: foto
     },
   ],
   select_table:1,
}

const reducer = (state = initialState, action) => {
console.log(action)
switch (action.type) {
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
    default:
    return state;
  }
}

export default createStore(reducer)
