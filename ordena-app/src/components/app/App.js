import './styles.scss';
import {Provider} from 'react-redux'
import store from './store'
import {Switch, Route} from 'react-router-dom'

import home from './pages_user/home'
import menu from './pages_user/menu'
import chat from './pages_user/chat'
import payment from './pages_user/payment'
import account from './pages_user/account'
import turn from './pages_user/turn'

import LogoOrdena from './elements/logo_ordena/logo'
import NavUser from './elements/footer_nav_user/nav_user'

const App = () => (

  <Provider store={store}>


    <div className="styles">
      <LogoOrdena/>
      <div>
      <Switch>
        <Route exact path= '/turn' component={turn}/>
        <Route path= '/home' component={home}/>
        <Route path= '/menu' component={menu}/>
        <Route path= '/chat' component={chat}/>
        <Route path= '/payment' component={payment}/>
        <Route path= '/account' component={account}/>
      </Switch>
      </div>
      <NavUser/>
    </div>


  </Provider>

)

export default App;
