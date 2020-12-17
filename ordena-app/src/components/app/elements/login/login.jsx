import React from 'react';
import Separator from '../../../../assets/images/login/separator.svg';
import TextGoogle from '../../../../assets/images/login/text_google.svg';
import TextFacebook from '../../../../assets/images/login/text_facebook.svg';
import IconGoogle from '../../../../assets/images/login/icon_google.svg';
import IconFacebook from '../../../../assets/images/login/icon_facebook.svg';

const PreOrder = () => (
  <div>
        <img src={Separator} className="separator_login" alt="logo" />

        <img src={TextFacebook} className="text_facebook" alt="logo" />
        <img src={IconFacebook} className="icon_facebook" alt="logo" />

        <img src={TextGoogle} className="text_google" alt="logo" />
        <img src={IconGoogle} className="icon_google" alt="logo" />
  </div>

)

export default PreOrder;
