import React from "react";
import { connect } from "react-redux";
import { CaretRightFilled } from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function EditCategory({
  categorys,
  edit_category,
  selectCategory,
  selectAdds,
  id_category,
}) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (id_category === 0) {
    return (
      <div className="container_create_category">
        <br />
        <Form
          {...layout}
          name="createCategory"
          initialValues={{ name_category: "Holi" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="name_edit_category_setup">Nombre de la categoria</p>
          <Form.Item
            label="Name_Category"
            name="name_category"
            rules={[
              {
                required: true,
                message: "Por favor creen nuevos ",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Crear
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
        {categorys
          .filter((a) => a.id === id_category)
          .map((b) => (
            <div className="container_edit_category" key={b.id}>
              <br />
              <Form
                {...layout}
                name="editCategory"
                initialValues={{
                  name_category_e: b.name_category,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <p className="name_edit_category_setup">
                  Nombre de la categoria
                </p>
                <Form.Item
                  label="Name_Category"
                  name="name_category_e"
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor ingresa un nuevo nombre valido, para tu categoria",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="button_edit_category"
                  >
                    Editar
                  </Button>
                </Form.Item>
              </Form>
              {""}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categorys: state.categorys,
  id_food: state.id_food,
  id_category: state.id_category,
  categorys: state.categorys,
  edit_category: state.edit_category,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory(d) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: d.id,
      id_food: 0,
    });
  },
  selectAdds(d) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: 1,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
