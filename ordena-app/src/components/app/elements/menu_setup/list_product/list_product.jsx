import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { CaretRightFilled } from "@ant-design/icons";
import SelectorModifier from "../selector_modifiers/selector_modifiers.jsx";
import SelectorAditional from "../selector_aditionals/selector_aditionals.jsx";
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
  Typography
} from "antd";
import {
  UploadOutlined,
  InboxOutlined,
  CheckSquareFilled,
  SmileOutlined,
  UserOutlined
} from "@ant-design/icons";
const { Option } = Select;

{
  /*Codigo nuevo*/
}
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

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

const ModalForm_1 = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title="Crear_Modificador"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="userForm_1">
        <p className="title_create_mod">Nombre</p>
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true
            }
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
              required: true
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const ModalForm_2 = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title="Crear_Adicional"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="userForm_2">
        <p className="title_create_mod">Nombre</p>

        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true
            }
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
              required: true
            }
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
              required: true
            }
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
const normFile = e => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

function ListProduct({
  create_product,
  show_food,
  selectProduct,
  id_category,
  id_food,
  product_temp,
  modifiers,
  id_create_food,
  products,
  actualizar_comp,
  prices
}) {
  const [visible_1, setVisible_1] = useState(false);
  const [visible_2, setVisible_2] = useState(false);
  const showUserModal_1 = () => {
    setVisible_1(true);
  };
  const hideUserModal_1 = () => {
    setVisible_1(false);
  };
  const showUserModal_2 = () => {
    setVisible_2(true);
  };
  const hideUserModal_2 = () => {
    setVisible_2(false);
  };
  const onFinish = values => {
    console.log("Finish:", values);
  };

  if (create_product === true) {
    return (
      <div
        className="container_list_product"
        style={id_food === 0 ? { display: "none" } : { display: "grid" }}
      >
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            if (name === "userForm_1") {
              console.log("Finish:", values);
              setVisible_1(false);
            }
            if (name === "userForm_2") {
              console.log("Finish:", values);
              setVisible_2(false);
            }
          }}
        >
          <Form
            name="basicForm"
            onFinish={onFinish}
            initialValues={{
              "input-number": 10000,
              description_input: " ",
              name_input: " "
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
                      message: "Por favor ingrese el nombre del producto"
                    }
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
                        "Por favor escriba una descripción para su producto"
                    }
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
                      message: "Por favor asigne un precio para su producto"
                    }
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
                    {modifiers
                      .filter(b => b.type_modifier === "T")
                      .map(p => (
                        <div key={p.id_modifier}>
                          <button className="button_modifier" type="button">
                            <div className="order_button_modifier">
                              <div className="text_button_modifier">
                                {p.name_modifier}
                              </div>
                              <div>
                                <CheckSquareFilled />
                              </div>
                            </div>
                          </button>
                        </div>
                      ))}
                  </div>
                  <div>
                    {modifiers
                      .filter(b => b.type_modifier === "P")
                      .map(p =>
                        p.code_modifier.includes(id_food) ? (
                          <div key={p.id_modifier}>
                            <button className="button_modifier">
                              <div className="order_button_modifier">
                                <div className="text_button_modifier">
                                  {p.name_modifier}
                                </div>
                                <div>
                                  <CheckSquareFilled />
                                </div>
                              </div>
                            </button>
                          </div>
                        ) : (
                          " "
                        )
                      )}
                  </div>
                  <div>
                    {modifiers
                      .filter(b => b.type_modifier === "C")
                      .map(p =>
                        p.code_modifier.includes(id_category) ? (
                          <div key={p.id_modifier}>
                            <button className="button_modifier">
                              <div className="order_button_modifier">
                                <div className="text_button_modifier">
                                  {p.name_modifier}
                                </div>
                                <div>
                                  <CheckSquareFilled />
                                </div>
                              </div>
                            </button>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    <br />
                  </div>
                  <div>
                    <SelectorModifier />
                  </div>
                  <div>
                    <br />
                    <div>
                      <Button
                        htmlType="button"
                        style={{
                          margin: "0 8px"
                        }}
                        onClick={showUserModal_1}
                      >
                        + Crear Modificadores
                      </Button>
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
                    {products
                      .filter(c => c.id_category === 1)
                      .filter(b => b.type_product === "T")
                      .map(p => (
                        <div key={p.id_product}>
                          <button className="button_modifier" type="button">
                            <div className="order_button_modifier">
                              <div className="text_button_modifier">
                                {p.name_product}
                              </div>
                              <div>
                                <CheckSquareFilled />
                              </div>
                            </div>
                          </button>
                        </div>
                      ))}
                  </div>
                  <div>
                    {products
                      .filter(c => c.id_category === 1)
                      .filter(b => b.type_product === "P")
                      .map(p =>
                        p.code_product.includes(id_food) ? (
                          <div key={p.id_product}>
                            <button className="button_modifier">
                              <div className="order_button_modifier">
                                <div className="text_button_modifier">
                                  {p.name_product}
                                </div>
                                <div>
                                  <CheckSquareFilled />
                                </div>
                              </div>
                            </button>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                  </div>
                  <div>
                    {products
                      .filter(c => c.id_category === 1)
                      .filter(b => b.type_product === "C")
                      .map(p =>
                        p.code_product.includes(id_category) ? (
                          <div key={p.id_product}>
                            <button className="button_modifier">
                              <div className="order_button_modifier">
                                <div className="text_button_modifier">
                                  {p.name_product}
                                </div>
                                <div>
                                  <CheckSquareFilled />
                                </div>
                              </div>
                            </button>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    <br />
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
                          margin: "0 8px"
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
          <ModalForm_1 visible={visible_1} onCancel={hideUserModal_1} />
          <ModalForm_2 visible={visible_2} onCancel={hideUserModal_2} />
        </Form.Provider>
      </div>
    );
  } else {
    if (actualizar_comp === true) {
      return (
        <div
          className="container_list_product"
          style={id_food === 0 ? { display: "none" } : { display: "grid" }}
        >
          {products
            .filter(a => a.id_product === id_food)
            .map(b => (
              <div key={b.id_product}>
                {prices
                  .filter(c => c.product_id === id_food)
                  .map(d => (
                    <div key={d.id_price}>
                      {" "}
                      <Form.Provider
                        onFormFinish={(name, { values, forms }) => {
                          if (name === "userForm_1") {
                            console.log("Finish:", values);
                            setVisible_1(false);
                          }
                          if (name === "userForm_2") {
                            console.log("Finish:", values);
                            setVisible_2(false);
                          }
                        }}
                      >
                        <Form
                          name="basicForm"
                          onFinish={onFinish}
                          initialValues={{
                            "input-number": d.value_price,
                            description_input: b.description_product,
                            name_input: b.name_product
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
                                <Upload.Dragger
                                  name="files"
                                  action="/upload.do"
                                >
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
                                      "Por favor ingrese el nombre del producto"
                                  }
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
                                      "Por favor escriba una descripción para su producto"
                                  }
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
                                      "Por favor asigne un precio para su producto"
                                  }
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
                                  {modifiers
                                    .filter(b => b.type_modifier === "T")
                                    .map(p => (
                                      <div key={p.id_modifier}>
                                        <button
                                          className="button_modifier"
                                          type="button"
                                        >
                                          <div className="order_button_modifier">
                                            <div className="text_button_modifier">
                                              {p.name_modifier}
                                            </div>
                                            <div>
                                              <CheckSquareFilled />
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                    ))}
                                </div>
                                <div>
                                  {modifiers
                                    .filter(b => b.type_modifier === "P")
                                    .map(p =>
                                      p.code_modifier.includes(id_food) ? (
                                        <div key={p.id_modifier}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_modifier}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        " "
                                      )
                                    )}
                                </div>
                                <div>
                                  {modifiers
                                    .filter(b => b.type_modifier === "C")
                                    .map(p =>
                                      p.code_modifier.includes(id_category) ? (
                                        <div key={p.id_modifier}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_modifier}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )
                                    )}
                                  <br />
                                </div>
                                <div>
                                  <SelectorModifier />
                                </div>
                                <div>
                                  <br />
                                  <div>
                                    <Button
                                      htmlType="button"
                                      style={{
                                        margin: "0 8px"
                                      }}
                                      onClick={showUserModal_1}
                                    >
                                      + Crear Modificadores
                                    </Button>
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
                                  {products
                                    .filter(c => c.id_category === 1)
                                    .filter(b => b.type_product === "T")
                                    .map(p => (
                                      <div key={p.id_product}>
                                        <button
                                          className="button_modifier"
                                          type="button"
                                        >
                                          <div className="order_button_modifier">
                                            <div className="text_button_modifier">
                                              {p.name_product}
                                            </div>
                                            <div>
                                              <CheckSquareFilled />
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                    ))}
                                </div>
                                <div>
                                  {products
                                    .filter(c => c.id_category === 1)
                                    .filter(b => b.type_product === "P")
                                    .map(p =>
                                      p.code_product.includes(id_food) ? (
                                        <div key={p.id_product}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_product}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )
                                    )}
                                </div>
                                <div>
                                  {products
                                    .filter(c => c.id_category === 1)
                                    .filter(b => b.type_product === "C")
                                    .map(p =>
                                      p.code_product.includes(id_category) ? (
                                        <div key={p.id_product}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_product}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )
                                    )}
                                  <br />
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
                                        margin: "0 8px"
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
                        <ModalForm_1
                          visible={visible_1}
                          onCancel={hideUserModal_1}
                        />
                        <ModalForm_2
                          visible={visible_2}
                          onCancel={hideUserModal_2}
                        />
                      </Form.Provider>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      );
    }
    if (actualizar_comp === false) {
      return (
        <div
          className="container_list_product"
          style={id_food === 0 ? { display: "none" } : { display: "grid" }}
        >
          {products
            .filter(a => a.id_product === id_food)
            .map(b => (
              <div key={b.id_product}>
                {prices
                  .filter(c => c.product_id === id_food)
                  .map(d => (
                    <div key={d.id_price}>
                      {" "}
                      <Form.Provider
                        onFormFinish={(name, { values, forms }) => {
                          if (name === "userForm_1") {
                            console.log("Finish:", values);
                            setVisible_1(false);
                          }
                          if (name === "userForm_2") {
                            console.log("Finish:", values);
                            setVisible_2(false);
                          }
                        }}
                      >
                        <Form
                          name="basicForm"
                          onFinish={onFinish}
                          initialValues={{
                            "input-number": d.value_price,
                            description_input: b.description_product,
                            name_input: b.name_product
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
                                <Upload.Dragger
                                  name="files"
                                  action="/upload.do"
                                >
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
                                      "Por favor ingrese el nombre del producto"
                                  }
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
                                      "Por favor escriba una descripción para su producto"
                                  }
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
                                      "Por favor asigne un precio para su producto"
                                  }
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
                                  {modifiers
                                    .filter(b => b.type_modifier === "T")
                                    .map(p => (
                                      <div key={p.id_modifier}>
                                        <button
                                          className="button_modifier"
                                          type="button"
                                        >
                                          <div className="order_button_modifier">
                                            <div className="text_button_modifier">
                                              {p.name_modifier}
                                            </div>
                                            <div>
                                              <CheckSquareFilled />
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                    ))}
                                </div>
                                <div>
                                  {modifiers
                                    .filter(b => b.type_modifier === "P")
                                    .map(p =>
                                      p.code_modifier.includes(id_food) ? (
                                        <div key={p.id_modifier}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_modifier}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        " "
                                      )
                                    )}
                                </div>
                                <div>
                                  {modifiers
                                    .filter(b => b.type_modifier === "C")
                                    .map(p =>
                                      p.code_modifier.includes(id_category) ? (
                                        <div key={p.id_modifier}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_modifier}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )
                                    )}
                                  <br />
                                </div>
                                <div>
                                  <SelectorModifier />
                                </div>
                                <div>
                                  <br />
                                  <div>
                                    <Button
                                      htmlType="button"
                                      style={{
                                        margin: "0 8px"
                                      }}
                                      onClick={showUserModal_1}
                                    >
                                      + Crear Modificadores
                                    </Button>
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
                                  {products
                                    .filter(c => c.id_category === 1)
                                    .filter(b => b.type_product === "T")
                                    .map(p => (
                                      <div key={p.id_product}>
                                        <button
                                          className="button_modifier"
                                          type="button"
                                        >
                                          <div className="order_button_modifier">
                                            <div className="text_button_modifier">
                                              {p.name_product}
                                            </div>
                                            <div>
                                              <CheckSquareFilled />
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                    ))}
                                </div>
                                <div>
                                  {products
                                    .filter(c => c.id_category === 1)
                                    .filter(b => b.type_product === "P")
                                    .map(p =>
                                      p.code_product.includes(id_food) ? (
                                        <div key={p.id_product}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_product}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )
                                    )}
                                </div>
                                <div>
                                  {products
                                    .filter(c => c.id_category === 1)
                                    .filter(b => b.type_product === "C")
                                    .map(p =>
                                      p.code_product.includes(id_category) ? (
                                        <div key={p.id_product}>
                                          <button className="button_modifier">
                                            <div className="order_button_modifier">
                                              <div className="text_button_modifier">
                                                {p.name_product}
                                              </div>
                                              <div>
                                                <CheckSquareFilled />
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )
                                    )}
                                  <br />
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
                                        margin: "0 8px"
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
                        <ModalForm_1
                          visible={visible_1}
                          onCancel={hideUserModal_1}
                        />
                        <ModalForm_2
                          visible={visible_2}
                          onCancel={hideUserModal_2}
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
}

const mapStateToProps = state => ({
  show_food: state.show_food,
  id_category: state.id_category,
  id_food: state.id_food,
  create_product: state.create_product,
  product_temp: state.product_temp,
  modifiers: state.modifiers,
  id_create_food: state.id_create_food,
  products: state.products,
  actualizar_comp: state.actualizar_comp,
  prices: state.prices
});

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}

const mapDispatchToProps = dispatch => ({
  selectProduct(d) {
    dispatch({
      type: "SELECT_PRODUCT_SETUP",
      id_food: d.id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
