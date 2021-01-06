import { Provider } from "react-redux";
import store from "./store";
import { Switch, Route } from "react-router-dom";
import home from "./pages_user/home";
import menu from "./pages_user/menu";
import chat from "./pages_user/chat";
import payment from "./pages_user/payment";
import account from "./pages_user/account";
import turn from "./pages_user/turn";
import register from "./pages_user/register";
import tables from "./pages_service/tables";
import info_table from "./pages_service/info_table";
import chat_service from "./pages_service/chat_service";
import code_qr from "./pages_service/code_qr";
import account_service from "./pages_service/account_service";
import tables_admin from "./pages_admin/tables_admin";
import info_table_admin from "./pages_admin/info_table_admin";
import chat_admin from "./pages_admin/chat_admin";
import code_qr_admin from "./pages_admin/code_qr_admin";
import account_admin from "./pages_admin/account_admin";
import menu_admin from "./pages_admin/menu_admin";
import menu_setup from "./pages_admin/menu_setup";
import cashier_setup from "./pages_admin/cashier_setup";

const App = () => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route path="/turn" component={turn} exact />
        <Route path="/register" component={register} exact />
        <Route path="/home" component={home} exact />
        <Route path="/menu" component={menu} exact />
        <Route path="/chat" component={chat} exact />
        <Route path="/payment" component={payment} exact />
        <Route path="/account" component={account} />

        <Route path="/service/tables" component={tables} exact />
        <Route path="/service/info_table" component={info_table} exact />
        <Route path="/service/chat_service" component={chat_service} exact />
        <Route path="/service/code_qr" component={code_qr} />
        <Route
          path="/service/account_service"
          component={account_service}
          exact
        />

        <Route path="/restaurant/tables_admin" component={tables_admin} />
        <Route
          path="/restaurant/info_table_admin"
          component={info_table_admin}
        />
        <Route path="/restaurant/chat_admin" component={chat_admin} />
        <Route path="/restaurant/code_qr_admin" component={code_qr_admin} />
        <Route path="/restaurant/account_admin" component={account_admin} />
        <Route path="/restaurant/menu_admin" component={menu_admin} />
        <Route path="/restaurant/menu_setup" component={menu_setup} />
        <Route path="/restaurant/cashier_setup" component={cashier_setup} />
      </Switch>
    </div>
  </Provider>
);

export default App;
