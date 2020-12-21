import {createStore} from 'redux'
import foto from '../../assets/images/tarjets/Image.svg';

const initialState = {
  menu: [],
  navegador:[],

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
