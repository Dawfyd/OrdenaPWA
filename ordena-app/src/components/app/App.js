import './styles.scss';
import {Provider} from 'react-redux'
import store from './store'
import {Switch, Route} from 'react-router-dom'

import Home from './PagesUser/Home'
import Menu from './PagesUser/Menu'
import Chat from './PagesUser/Chat'
import Pago from './PagesUser/Pago'
import Cuenta from './PagesUser/Cuenta'
import Turno from './PagesUser/Turno'

import LogoOrdena from './elements/LogoOrdena/Logo'
import Navegador from './elements/BarraNavUsers/Navegador'

const App = () => (

  <Provider store={store}>


    <div className="styles">
      <LogoOrdena/>
      <div>
      <Switch>
        <Route exact path= '/Turno' component={Turno}/>
        <Route path= '/Home' component={Home}/>
        <Route path= '/Menu' component={Menu}/>
        <Route path= '/Chat' component={Chat}/>
        <Route path= '/Pago' component={Pago}/>
        <Route path= '/Cuenta' component={Cuenta}/>
      </Switch>
      </div>
      <Navegador/>
    </div>


  </Provider>

)

export default App;
