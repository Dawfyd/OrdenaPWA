import {createStore} from 'redux'
import foto from '../../assets/images/tarjets/Image.svg';
import kathryn from '../../assets/images/avatars/kathryn.png';
import robert from '../../assets/images/avatars/robert.png';
import cameron from '../../assets/images/avatars/cameron.png';
import darrell from '../../assets/images/avatars/darrell.png';
import jane  from '../../assets/images/avatars/jane.png';

const initialState = {
  menu: [],
  navegador:[],

  data_user: [

    {id: 1,
    name: 'Jane Cooper',
    icon: jane

    },
    {id: 2,
    name: 'David Hoyos',
    icon: "https://lh3.googleusercontent.com/a-/AOh14GhYx-n5PDPFGmemzdi06rBLEpQt1Rc7y0iI93ZwzA=s96-c",

    },
    {id: 3,
    name: 'Robert Fox',
    icon: robert

    },
    {id: 4,
    name: 'Darrell Steward',
    icon: darrell
    },
    {id: 5,
    name: 'Kathryn Murphy',
    icon: kathryn
    },
    {id: 6,
    name: 'Leslie Alexander',
    icon: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {id: 7,
    name: 'Cameron Williamson',
    icon: cameron
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
}

const reducer = (state = initialState, action) => {

  console.log(action)
  return state
}
export default createStore(reducer)
