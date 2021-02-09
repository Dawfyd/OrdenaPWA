import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { CaretRightFilled } from "@ant-design/icons";
import SelectorModifier from "../selector_modifiers/selector_modifiers.jsx";
import SelectorAditional from "../selector_aditionals/selector_aditionals.jsx";
import ListModifier from "../list_modifiers/list_modifiers.jsx";
import ListAditional from "../list_aditionals/list_aditionals.jsx";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Modal,
  Avatar,
  Typography,
  Divider,
} from "antd";
import {
  UploadOutlined,
  InboxOutlined,
  CheckSquareFilled,
  SmileOutlined,
  CaretDownFilled,
  UserOutlined,
} from "@ant-design/icons";
const { Option } = Select;
{
  /*Codigo nuevo*/
}
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm1 = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal
      title="Crear Modificador Unico"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="form_mods_unic">
        <div style={{ display: "none" }}>
          <Form.Item initialValue="1" name="id_mod_add" label="Id_Mod_U">
            <InputNumber />
          </Form.Item>
        </div>
        <p className="title_create_mod">Nombre</p>
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p className="title_create_mod">Descripción</p>
        <Form.Item
          name="description"
          label="Descripcion"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const ModalForm2 = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal
      title="Crear Adicional"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="form_adds">
        <div style={{ display: "none" }}>
          <Form.Item initialValue="2" name="id_mod_add" label="Id_Mod_U">
            <InputNumber />
          </Form.Item>
        </div>
        <p className="title_create_mod">Nombre</p>

        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p className="title_create_mod">Precio</p>

        <Form.Item
          name="price"
          label="Precio"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <p className="title_create_mod">Descripción</p>

        <Form.Item
          name="description"
          label="Descripcion"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const ModalForm3 = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal
      title="Crear Modificador con Multiples Opciones"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="form_mods_multiple">
        <div style={{ display: "none" }}>
          <Form.Item initialValue="3" name="id_mod_add" label="Id_Mod_U">
            <InputNumber />
          </Form.Item>
        </div>
        <p className="title_create_mod">Nombre</p>
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p className="title_create_mod">Alternativas</p>
        <div>
          <p className="description_alt_mods_1">
            Ingresa la alternativas para el modificador separadas por comas.
          </p>
          <p className="description_alt_mods_2">
            Ej: (Termino medio (1/2), Tres cuartos(3/4), Bien cocida)
          </p>
          <Form.Item
            name="alternative"
            label="Alternativas"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <p className="title_create_mod">Descripción</p>
        <Form.Item
          name="description"
          label="Descripcion"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
{
  /*Fin codigo nuevo*/
}
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

function ListProduct({
  create_product,
  show_food,
  id_category,
  id_food,
  product_temp,
  modifiers,
  id_create_food,
  products,
  actualizar_comp,
  prices,
  switch_opt_modifier,
  SwitchMods,
  ReceiveDataForm1,
  ReceiveDataForm2,
  ReceiveDataForm3,
  show_create_mods,
  ShowCreateMods,
}) {
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [visible3, setvisible3] = useState(false);
  {
    /*---------COSA-1----------*/
  }
  const showUserModal_1 = () => {
    setvisible1(true);
  };
  const hideUserModal1 = () => {
    setvisible1(false);
  };
  {
    /*---------COSA-2----------*/
  }
  const showUserModal_2 = () => {
    setvisible2(true);
  };
  const hideUserModal2 = () => {
    setvisible2(false);
  };
  {
    /*---------COSA-3----------*/
  }
  const showUserModal_3 = () => {
    setvisible3(true);
  };
  const hideUserModal3 = () => {
    setvisible3(false);
  };
  const onFinish = (values) => {
    console.log("Finish_1:", values);
  };

  if (create_product === true) {
    return (
      <div
        className="container_list_product"
        style={id_food === 0 ? { display: "none" } : { display: "grid" }}
      >
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            if (name === "form_mods_unic") {
              console.log("Finish_1:", values);
              setvisible1(false);
              ReceiveDataForm1(values);
            }
            if (name === "form_adds") {
              console.log("Finish_2:", values);
              setvisible2(false);
              ReceiveDataForm2(values);
            }
            if (name === "form_mods_multiple") {
              console.log("Finish_3:", values);
              setvisible3(false);
              ReceiveDataForm3(values);
            }
          }}
        >
          <Form
            name="basicForm"
            onFinish={onFinish}
            initialValues={{
              "input-number": 10000,
              description_input: " ",
              name_input: " ",
            }}
          >
            <div className="container_photo_product">
              <div className="photo_product">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Haz click o arrastra un archivo para cargar una foto para
                      tu producto
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </div>
            </div>
            <div className="form_product_setup">
              <div>
                <br />
                <p className="name_product_setup">{"Nombre:"}</p>
                <Form.Item
                  name="name_input"
                  label="Nombre"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese el nombre del producto",
                    },
                  ]}
                >
                  <Input placeholder="Nombre del producto" />
                </Form.Item>
              </div>
              <div>
                <p className="description_product_setup">{"Descripción:"}</p>
                <Form.Item
                  name="description_input"
                  label="Descripción"
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor escriba una descripción para su producto",
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
              </div>
              <div>
                <p className="price_product_setup">{"Precio:"}</p>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor asigne un precio para su producto",
                    },
                  ]}
                  label="InputNumber"
                  name="input-number"
                >
                  <InputNumber min={1} max={100000} />
                </Form.Item>
              </div>
            </div>
            <div className="div_container_create_mod">
              <div className="container_title_create_mod">
                <br />
                <p className="title_create_mod">Modificadores</p>
              </div>
              <div className="box_container_create_mod">
                <div className="container_create_mod">
                  <div>
                    <ListModifier />
                  </div>
                  <div>
                    <SelectorModifier />
                  </div>

                  <div>
                    <br />
                    <button
                      className="button_selector_modifier"
                      onClick={() => ShowCreateMods()}
                      type="button"
                    >
                      <div className="order_card_selector_modifier">
                        <div
                          style={
                            show_create_mods === true
                              ? { color: "#9B26B6" }
                              : { color: "#32c755" }
                          }
                        >
                          <div
                            className="flechita_selector_modifier"
                            style={
                              show_create_mods === true
                                ? { display: "flex" }
                                : { display: "none" }
                            }
                          >
                            <CaretDownFilled />
                          </div>
                          <div
                            className="flechita_selector_modifier"
                            style={
                              show_create_mods === true
                                ? { display: "none" }
                                : { display: "flex" }
                            }
                          >
                            <CaretRightFilled />
                          </div>
                        </div>
                        <div className="title_selector_modifier">
                          Crear Modificadores
                        </div>
                      </div>
                    </button>
                    <div>
                      <div
                        className="button_mod_multiple"
                        style={
                          show_create_mods === true
                            ? { display: "flex" }
                            : { display: "none" }
                        }
                      >
                        <Button
                          className="mods_multi_alt"
                          htmlType="button"
                          style={{
                            margin: "0 8px",
                          }}
                          onClick={showUserModal_3}
                        >
                          <div className="text_button_mods_mult_alt">
                            Modificadores con alternativa multiple
                          </div>
                        </Button>
                      </div>
                      <div
                        className="button_mod_single"
                        style={
                          show_create_mods === true
                            ? { display: "flex" }
                            : { display: "none" }
                        }
                      >
                        <Button
                          className="mods_unic_alt"
                          htmlType="button"
                          style={{
                            margin: "0 8px",
                          }}
                          onClick={showUserModal_1}
                        >
                          <div className="text_button_mods_unic_alt">
                            Modificadores con alternativa unica
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div_container_create_add">
              <div className="container_title_create_add">
                <br />
                <p className="title_create_add">Adiciones</p>
              </div>
              <div className="box_container_create_add">
                <div className="container_create_add">
                  <div>
                    <ListAditional />
                  </div>
                  <div>
                    <SelectorAditional />
                  </div>
                  <div>
                    <br />
                    <div>
                      <Button
                        htmlType="button"
                        style={{
                          margin: "0 8px",
                        }}
                        onClick={showUserModal_2}
                      >
                        + Crear Adicionales
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Crear
                </Button>
              </Form.Item>
            </div>
          </Form>
          <ModalForm1 visible={visible1} onCancel={hideUserModal1} />
          <ModalForm2 visible={visible2} onCancel={hideUserModal2} />
          <ModalForm3 visible={visible3} onCancel={hideUserModal3} />
        </Form.Provider>
      </div>
    );
  } else {
    return (
      <div
        className="container_list_product"
        style={id_food === 0 ? { display: "none" } : { display: "grid" }}
      >
        {products
          .filter((a) => a.id_product === id_food)
          .map((b) => (
            <div key={b.id_product}>
              {prices
                .filter((c) => c.product_id === id_food)
                .map((d) => (
                  <div key={d.id_price}>
                    {" "}
                    <Form.Provider
                      onFormFinish={(name, { values, forms }) => {
                        if (name === "form_mods_unic") {
                          console.log("Finish_1:", values);
                          setvisible1(false);
                          ReceiveDataForm1(values);
                        }
                        if (name === "form_adds") {
                          console.log("Finish_2:", values);
                          setvisible2(false);
                          ReceiveDataForm2(values);
                        }
                        if (name === "form_mods_multiple") {
                          console.log("Finish_3:", values);
                          setvisible3(false);
                          ReceiveDataForm3(values);
                        }
                      }}
                    >
                      <Form
                        name="basicForm"
                        onFinish={onFinish}
                        initialValues={{
                          "input-number": d.value_price,
                          description_input: b.description_product,
                          name_input: b.name_product,
                        }}
                      >
                        <div className="container_photo_product">
                          <div className="photo_product">
                            <Form.Item
                              name="dragger"
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              noStyle
                            >
                              <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                  <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">
                                  Haz click o arrastra un archivo para cargar
                                  una foto para tu producto
                                </p>
                              </Upload.Dragger>
                            </Form.Item>
                          </div>
                        </div>
                        <div className="form_product_setup">
                          <div>
                            <br />
                            <p className="name_product_setup">{"Nombre:"}</p>
                            <Form.Item
                              name="name_input"
                              label="Nombre"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Por favor ingrese el nombre del producto",
                                },
                              ]}
                            >
                              <Input placeholder="Nombre del producto" />
                            </Form.Item>
                          </div>
                          <div>
                            <p className="description_product_setup">
                              {"Descripción:"}
                            </p>
                            <Form.Item
                              name="description_input"
                              label="Descripción"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Por favor escriba una descripción para su producto",
                                },
                              ]}
                            >
                              <Input.TextArea />
                            </Form.Item>
                          </div>
                          <div>
                            <p className="price_product_setup">{"Precio:"}</p>
                            <Form.Item
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Por favor asigne un precio para su producto",
                                },
                              ]}
                              label="InputNumber"
                              name="input-number"
                            >
                              <InputNumber min={1} max={100000} />
                            </Form.Item>
                          </div>
                        </div>
                        <div className="div_container_create_mod">
                          <div className="container_title_create_mod">
                            <br />
                            <p className="title_create_mod">Modificadores</p>
                          </div>
                          <div className="box_container_create_mod">
                            <div className="container_create_mod">
                              <div>
                                <ListModifier />
                              </div>
                              <div>
                                <SelectorModifier />
                              </div>
                              <div>
                                <br />
                                <button
                                  className="button_selector_modifier"
                                  onClick={() => ShowCreateMods()}
                                  type="button"
                                >
                                  <div className="order_card_selector_modifier">
                                    <div
                                      style={
                                        show_create_mods === true
                                          ? { color: "#9B26B6" }
                                          : { color: "#32c755" }
                                      }
                                    >
                                      <div
                                        className="flechita_selector_modifier"
                                        style={
                                          show_create_mods === true
                                            ? { display: "flex" }
                                            : { display: "none" }
                                        }
                                      >
                                        <CaretDownFilled />
                                      </div>
                                      <div
                                        className="flechita_selector_modifier"
                                        style={
                                          show_create_mods === true
                                            ? { display: "none" }
                                            : { display: "flex" }
                                        }
                                      >
                                        <CaretRightFilled />
                                      </div>
                                    </div>
                                    <div className="title_selector_modifier">
                                      Crear Modificadores
                                    </div>
                                  </div>
                                </button>
                                <div>
                                  <div
                                    className="button_mod_multiple"
                                    style={
                                      show_create_mods === true
                                        ? { display: "flex" }
                                        : { display: "none" }
                                    }
                                  >
                                    <Button
                                      className="mods_multi_alt"
                                      htmlType="button"
                                      style={{
                                        margin: "0 8px",
                                      }}
                                      onClick={showUserModal_3}
                                    >
                                      <div className="text_button_mods_mult_alt">
                                        Modificadores con alternativa multiple
                                      </div>
                                    </Button>
                                  </div>
                                  <div
                                    className="button_mod_single"
                                    style={
                                      show_create_mods === true
                                        ? { display: "flex" }
                                        : { display: "none" }
                                    }
                                  >
                                    <Button
                                      className="mods_unic_alt"
                                      htmlType="button"
                                      style={{
                                        margin: "0 8px",
                                      }}
                                      onClick={showUserModal_1}
                                    >
                                      <div className="text_button_mods_unic_alt">
                                        Modificadores con alternativa unica
                                      </div>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="div_container_create_add">
                          <div className="container_title_create_add">
                            <br />
                            <p className="title_create_add">Adiciones</p>
                          </div>
                          <div className="box_container_create_add">
                            <div className="container_create_add">
                              <div>
                                <ListAditional />
                              </div>
                              <div>
                                <SelectorAditional />
                              </div>
                              <div>
                                <br />
                                <div>
                                  <Button
                                    htmlType="button"
                                    style={{
                                      margin: "0 8px",
                                    }}
                                    onClick={showUserModal_2}
                                  >
                                    + Crear Adicionales
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <br />
                          <Form.Item>
                            <Button type="primary" htmlType="submit">
                              Editar
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                      <ModalForm1
                        visible={visible1}
                        onCancel={hideUserModal1}
                      />
                      <ModalForm2
                        visible={visible2}
                        onCancel={hideUserModal2}
                      />
                      <ModalForm3
                        visible={visible3}
                        onCancel={hideUserModal3}
                      />
                    </Form.Provider>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  show_food: state.show_food,
  id_category: state.id_category,
  id_food: state.id_food,
  create_product: state.create_product,
  product_temp: state.product_temp,
  modifiers: state.modifiers,
  id_create_food: state.id_create_food,
  products: state.products,
  actualizar_comp: state.actualizar_comp,
  prices: state.prices,
  switch_opt_modifier: state.switch_opt_modifier,
  show_create_mods: state.show_create_mods,
});

function FormatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}

const mapDispatchToProps = (dispatch) => ({
  ShowMods() {
    dispatch({
      type: "SHOW_MODIFIERS",
      something_to_show: 1,
    });
  },
  SwitchMods() {
    dispatch({
      type: "SWITCH_MODIFIERS",
      something_to_show: 1,
    });
  },
  ReceiveDataForm1(values) {
    dispatch({
      type: "RECEIVE_DATA_1U",
      something_to_show: "1U",
      array_temp_values: values,
    });
  },
  ReceiveDataForm2(values) {
    dispatch({
      type: "RECEIVE_DATA_2A",
      something_to_show: "2A",
      array_temp_values: values,
    });
  },
  ReceiveDataForm3(values) {
    dispatch({
      type: "RECEIVE_DATA_3M",
      something_to_show: "3M",
      array_temp_values: values,
    });
  },
  ShowCreateMods() {
    dispatch({
      type: "SHOW_CREATE_MODIFIERS",
      something_to_show: 1,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
