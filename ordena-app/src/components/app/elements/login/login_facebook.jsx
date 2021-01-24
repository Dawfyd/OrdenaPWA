import React from "react";
import TextFacebook from "../../../../assets/images/login/text_facebook.svg";
import IconFacebook from "../../../../assets/images/login/icon_facebook.svg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function LoginFacebook() {
  const ResponseFacebook = (response_facebook) => {
    console.log(response_facebook);
    console.log(response_facebook.name);
    console.log(response_facebook.email);
  };

  return (
    <div>
      <FacebookLogin
        appId="2692092707691810"
        autoLoad={false}
        callback={ResponseFacebook}
        render={(renderProps) => (
          <div>
            <img
              onClick={renderProps.onClick}
              src={TextFacebook}
              className="text_facebook"
              alt="logo"
            />
            <img
              onClick={renderProps.onClick}
              src={IconFacebook}
              className="icon_facebook"
              alt="logo"
            />
          </div>
        )}
      />
    </div>
  );
}

export default LoginFacebook;
