import {createStore} from 'redux'

const initialState = {
  menu: [],
  navegador:[],


}

const reducer = (state = {initialState}, action) => {
  
  console.log(action)
  return state
}
export default createStore(reducer)
