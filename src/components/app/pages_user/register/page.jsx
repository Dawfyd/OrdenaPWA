import React, { Fragment } from "react";
import { matchPath } from "react-router";
import { connect } from "react-redux";
import RegisterUserOption from "../../elements/register_user_option/register_user_option";
import RegisterUser from "../../elements/register_user_option/register_user/register_user";
import RegisterAnonymous from "../../elements/register_user_option/register_anonymous/register_anonymous";
import LoginUser from "../../elements/register_user_option/login_user/login_user";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page({ props, id_spot_register, EnterPage, register_option }) {
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

        <div
          className="container_register_option"
          style={
            register_option === 0 ? { display: "block" } : { display: "none" }
          }
        >
          <RegisterUserOption />
        </div>
        <div
          className="container_register_option"
          style={
            register_option === 1 ? { display: "block" } : { display: "none" }
          }
        >
          <RegisterUser />
        </div>
        <div
          className="container_register_option"
          style={
            register_option === 2 ? { display: "block" } : { display: "none" }
          }
        >
          <RegisterAnonymous />
        </div>
        <div
          className="container_register_option"
          style={
            register_option === 3 ? { display: "block" } : { display: "none" }
          }
        >
          <LoginUser />
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  id_spot_register: state.id_spot_register,
  register_option: state.register_option,
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
