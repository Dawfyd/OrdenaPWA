import React, { Fragment } from "react";
import { matchPath } from "react-router";
import { connect } from "react-redux";
import Register from "../../elements/register/register";
import LoginFacebook from "../../elements/login/login_facebook";
import LoginGoogle from "../../elements/login/login_google";
import LogoOrdena from "../../elements/logo_ordena/logo";
import NavUser from "../../elements/footer_nav_user/nav_user";

function page({ props, id_spot_register, EnterPage }) {
  const CurrentRoute = window.location.pathname;
  const match = matchPath(CurrentRoute, {
    path: "/register/:id",
    exact: false,
    strict: false,
  });

  if (match == null) {
  } else window.onload = EnterPage(match);

  return (
    <Fragment>
      <div className="page_register">
        <header className="header_register">
          <LogoOrdena />
        </header>

        <div>
          <Register />
        </div>
        <div className="login_register">
          <LoginFacebook />
          <LoginGoogle />
        </div>

        <footer className="footer_register">
          <NavUser />
        </footer>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  id_spot_register: state.id_spot_register,
});
const mapDispatchToProps = (dispatch) => ({
  EnterPage(match) {
    dispatch({
      type: "ENTER_PAGE",
      id_spot_enter: match.params.id,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(page);
