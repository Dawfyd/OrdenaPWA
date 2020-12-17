import {Provider} from 'react-redux'
import store from './store'
import {Switch, Route} from 'react-router-dom'
import home from './pages_user/home'
import menu from './pages_user/menu'
import chat from './pages_user/chat'
import payment from './pages_user/payment'
import account from './pages_user/account'
import turn from './pages_user/turn'
import register from './pages_user/register'

const App = () => (

  <Provider store={store}>

      <div>
          <Switch>
            <Route path= '/turn' component={turn}/>
            <Route path= '/register' component={register}/>
            <Route path= '/home' component={home}/>
            <Route path= '/menu' component={menu}/>
            <Route path= '/chat' component={chat}/>
            <Route path= '/payment' component={payment}/>
            <Route path= '/account' component={account}/>
          </Switch>
     </div>

  </Provider>

)

export default App;
