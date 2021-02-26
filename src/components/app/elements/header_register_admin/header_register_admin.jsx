import React from "react";
import { connect } from "react-redux";
import { Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  FolderAddOutlined,
  ShopOutlined,
} from "@ant-design/icons";

function HeaderRegister({ stated_register }) {
  const { Step } = Steps;
  return (
    <div>
      <Steps className="steps_stated">
        <Step
          className="step_stated"
          status={stated_register === 0 ? "0" : "finish"}
          title="Información"
          icon={<UserOutlined />}
        />
        <Step
          className="step_stated"
          status={stated_register <= 1 ? "0" : "finish"}
          title="Modelo"
          icon={<SolutionOutlined />}
        />
        <Step
          className="step_stated"
          status={stated_register <= 2 ? "0" : "finish"}
          title="Documentos"
          icon={<FolderAddOutlined />}
        />
        <Step
          className="step_stated"
          status={stated_register <= 3 ? "0" : "finish"}
          title="Sede"
          icon={<ShopOutlined />}
        />
      </Steps>
      ,
    </div>
  );
}

const mapStateToProps = (state) => ({
  stated_register: state.stated_register,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRegister);
