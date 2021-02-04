import { Provider } from "react-redux";
import store from "./store";
import "./styles.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages_user/home";
import Menu from "./pages_user/menu";
import Chat from "./pages_user/chat";
import Payment from "./pages_user/payment";
import Account from "./pages_user/account";
import Turn from "./pages_user/turn";
import Register from "./pages_user/register";
import Tables from "./pages_service/tables";
import InfoTable from "./pages_service/info_table";
import ChatService from "./pages_service/chat_service";
import CodeQr from "./pages_service/code_qr";
import AccountService from "./pages_service/account_service";
import HomeAdmin from "./pages_admin/home_admin";
import RegisterAdmin from "./pages_admin/register_admin";
import LoginAdmin from "./pages_admin/login_admin";
import TablesAdmin from "./pages_admin/tables_admin";
import InfoTableAdmin from "./pages_admin/info_table_admin";
import ChatAdmin from "./pages_admin/chat_admin";
import CodeQrAdmin from "./pages_admin/code_qr_admin";
import AccountAdmin from "./pages_admin/account_admin";
import MenuAdmin from "./pages_admin/menu_admin";
import MenuSetup from "./pages_admin/menu_setup";
import CashierSetup from "./pages_admin/cashier_setup";
import SpotsSetup from "./pages_admin/spots_setup";
import LandingPage from "./ordena_pages/landing_page";

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/turn" component={Turn} exact />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} exact />
      <Route path="/menu" component={Menu} exact />
      <Route path="/chat" component={Chat} exact />
      <Route path="/payment" component={Payment} exact />
      <Route path="/account" component={Account} />

      <Route path="/service/tables" component={Tables} exact />
      <Route path="/service/info_table" component={InfoTable} exact />
      <Route path="/service/chat_service" component={ChatService} exact />
      <Route path="/service/code_qr" component={CodeQr} />
      <Route path="/service/account_service" component={AccountService} exact />

      <Route path="/restaurant/tables_admin" component={TablesAdmin} />
      <Route path="/restaurant/info_table_admin" component={InfoTableAdmin} />
      <Route path="/restaurant/chat_admin" component={ChatAdmin} />
      <Route path="/restaurant/code_qr_admin" component={CodeQrAdmin} />
      <Route path="/restaurant/account_admin" component={AccountAdmin} />
      <Route path="/restaurant/menu_admin" component={MenuAdmin} />

      <Route path="/restaurant/register" component={RegisterAdmin} />
      <Route path="/restaurant/login" component={LoginAdmin} />
      <Route path="/restaurant/menu_setup" component={MenuSetup} />
      <Route path="/restaurant/cashier_setup" component={CashierSetup} />
      <Route path="/restaurant/spots_setup" component={SpotsSetup} />
      <Route path="/restaurant/home" component={HomeAdmin} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Provider>
);

export default App;
