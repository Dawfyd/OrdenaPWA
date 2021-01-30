import React from "react";
import Separator from "../../../../assets/images/login/separator.svg";
import TextGoogle from "../../../../assets/images/login/text_google.svg";
import IconGoogle from "../../../../assets/images/login/icon_google.svg";
import GoogleLogin from "react-google-login";

function LoginGoogle() {
  const ResponseGoogle = (response_google) => {
    console.log(response_google);
    console.log(response_google.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId="796744460100-9603gngteoerk8kci3v64kj81kk1ef7p.apps.googleusercontent.com"
        render={(renderProps) => (
          <div>
            <img
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              src={TextGoogle}
              className="text_google"
              alt="logo"
            />
            <img
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              src={IconGoogle}
              className="icon_google"
              alt="logo"
            />
          </div>
        )}
        onSuccess={ResponseGoogle}
        onFailure={ResponseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <img src={Separator} className="separator_login" alt="logo" />
    </div>
  );
}

export default LoginGoogle;
