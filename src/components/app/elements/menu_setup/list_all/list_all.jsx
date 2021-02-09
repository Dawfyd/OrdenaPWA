import React from "react";
import { connect } from "react-redux";
import {
  CaretRightFilled,
  CaretDownFilled,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";

function ListAll({
  categorys,
  selectCategory,
  selectAdds,
  createCategory,
  id_category,
  editCategory,
  selectModds,
}) {
  return (
    <div className="container_list_all">
      {categorys
        .filter((a) => a.id > 2)
        .map((d) => (
          <div className="card_list_all" key={d.id}>
            <div className="order_card_list_all">
              <button
                className="button_all_card"
                key={d.id}
                href="/dish"
                onClick={() => selectCategory(d)}
              >
                <div
                  className="bar_list_all_selected"
                  style={
                    d.id === id_category
                      ? { background: "#9B26B6" }
                      : { background: "white" }
                  }
                >
                  {""}
                </div>
                <div
                  className="flechita_list_all"
                  style={
                    d.id === id_category
                      ? { display: "none" }
                      : { display: "flex" }
                  }
                >
                  <CaretRightFilled />
                </div>
                <div
                  className="flechita_list_all_d"
                  style={
                    d.id === id_category
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <CaretDownFilled />
                </div>

                <div className="title_list_all">{d.name_category}</div>
              </button>
              <button className="button_options_category">
                <div>
                  <EyeOutlined />
                </div>
              </button>
              <button
                className="button_options_category_1"
                onClick={() => editCategory(d)}
                style={
                  d.id === id_category
                    ? { color: "#9B26B6" }
                    : { color: "#32c755" }
                }
              >
                <div>
                  <MoreOutlined />
                </div>
              </button>
            </div>
          </div>
        ))}
      {/*
      <div className="order_button_adds">
        <button className="button_adds" onClick={() => selectAdds()}>
          <div className="flechita_button_adds">
            <CaretRightFilled />
          </div>
          <div className="text_button_adds"> Adiciones</div>
        </button>
        <button className="button_options_adds">...</button>
      </div>
      */}
      <div className="div_button_add_category">
        <button
          className="button_add_category"
          onClick={() => createCategory()}
          style={
            id_category === 0 ? { color: "#9B26B6" } : { color: "#32c755" }
          }
        >
          <div>+ Agregar Categoria</div>
        </button>
      </div>
      <div>
        {/*----- COSAS ADICIONALES Y MODIFICADORES------*/}
        <br />
        {categorys
          .filter((a) => a.id <= 1)
          .map((d) => (
            <div className="card_list_all" key={d.id}>
              <div className="order_card_list_all">
                <button
                  className="button_all_card"
                  key={d.id}
                  href="/dish"
                  onClick={() => selectAdds(d)}
                >
                  <div
                    className="bar_list_all_selected"
                    style={
                      d.id === id_category
                        ? { background: "#9B26B6" }
                        : { background: "white" }
                    }
                  >
                    {""}
                  </div>
                  <div
                    className="flechita_list_all"
                    style={
                      d.id === id_category
                        ? { display: "none" }
                        : { display: "flex" }
                    }
                  >
                    <CaretRightFilled />
                  </div>
                  <div
                    className="flechita_list_all_d"
                    style={
                      d.id === id_category
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    <CaretDownFilled />
                  </div>

                  <div className="title_list_all">{d.name_category}</div>
                </button>
                <button className="button_options_category">
                  <div>
                    <EyeOutlined />
                  </div>
                </button>
                <button
                  className="button_options_category_1"
                  onClick={() => editCategory(d)}
                  style={
                    d.id === id_category
                      ? { color: "#9B26B6" }
                      : { color: "#32c755" }
                  }
                >
                  <div>
                    <MoreOutlined />
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <div className="order_card_list_all">
          <button
            className="button_all_card"
            href="/dish"
            onClick={() => selectModds()}
          >
            <div
              className="bar_list_all_selected"
              style={
                id_category === -2
                  ? { background: "#9B26B6" }
                  : { background: "white" }
              }
            >
              {""}
            </div>
            <div
              className="flechita_list_all"
              style={
                id_category === -2 ? { display: "none" } : { display: "flex" }
              }
            >
              <CaretRightFilled />
            </div>
            <div
              className="flechita_list_all_d"
              style={
                id_category === -2 ? { display: "flex" } : { display: "none" }
              }
            >
              <CaretDownFilled />
            </div>

            <div className="title_list_all">Modificadores</div>
          </button>
          <button className="button_options_category">
            <div>
              <EyeOutlined />
            </div>
          </button>
          <button
            className="button_options_category_1"
            onClick={() => editCategory()}
            style={
              id_category === -2 ? { color: "#9B26B6" } : { color: "#32c755" }
            }
          >
            <div>
              <MoreOutlined />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categorys: state.categorys,
  id_food: state.id_food,
  id_category: state.id_category,
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
  createCategory() {
    dispatch({
      type: "CREATE_CATEGORY",
      something_to_show: 1,
      id_category: 0,
    });
  },
  editCategory(d) {
    dispatch({
      type: "EDIT_CATEGORY",
      something_to_show: 1,
      id_category: d.id,
    });
  },
  selectModds() {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: -2,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAll);
