import { useQuery, gql } from "@apollo/client";
import React from "react";
import { connect } from "react-redux";
import {
  CaretRightFilled,
  CaretDownFilled,
  EyeOutlined,
  MoreOutlined
} from "@ant-design/icons";

const ALL_CATEGORYS = gql`
  query {
    categories(
      findAllCategoriesInput: { companyUuid: "f9U4JIdp6RKKvPCeAkhr_" }
    ) {
      id
      name
      description
      avaliable
    }
  }
`;

function ListAll({
  categorys,
  selectCategory,
  selectAdds,
  createCategory,
  id_category,
  editCategory,
  selectModds,
  SaveDataMenuSetupFromDB
}) {
  const { loading, error, data } = useQuery(ALL_CATEGORYS);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="container_list_all">
      <div className="div_categorys_list_all">
        {data.categories
          .filter(a => a.id > 0)
          .map(d => (
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

                  <div className="title_list_all">{d.name}</div>
                </button>
                <button className="button_avilable_category">
                  <div>
                    <EyeOutlined />
                  </div>
                </button>
                <button
                  className="button_options_category"
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
      <div className="container_adds_mods_list_all">
        <br />
        <div className="div_adds_list_all">
          <div className="order_card_list_all">
            <button
              className="button_all_card"
              href="/dish"
              onClick={() => selectModds()}
            >
              <div
                className="bar_list_all_selected"
                style={
                  id_category === -3
                    ? { background: "#9B26B6" }
                    : { background: "white" }
                }
              >
                {""}
              </div>
              <div
                className="flechita_list_all"
                style={
                  id_category === -3 ? { display: "none" } : { display: "flex" }
                }
              >
                <CaretRightFilled />
              </div>
              <div
                className="flechita_list_all_d"
                style={
                  id_category === -3 ? { display: "flex" } : { display: "none" }
                }
              >
                <CaretDownFilled />
              </div>

              <div className="title_list_all">Adicionales</div>
            </button>
            <button className="button_available_category_adds">
              <div>
                <EyeOutlined />
              </div>
            </button>
            <button
              className="button_options_category_adds"
              onClick={() => editCategory()}
              style={
                id_category === -3 ? { color: "#9B26B6" } : { color: "#32c755" }
              }
            >
              <div>
                <MoreOutlined />
              </div>
            </button>
          </div>
        </div>
        <div className="div_mods_list_all">
          <div className="order_card_list_all">
            <button
              className="button_all_card_mods"
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
            <button className="button_available_category_mods">
              <div>
                <EyeOutlined />
              </div>
            </button>
            <button
              className="button_options_category_mods"
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
    </div>
  );
}

const mapStateToProps = state => ({
  categorys: state.categorys,
  id_food: state.id_food,
  id_category: state.id_category
});

const mapDispatchToProps = dispatch => ({
  selectCategory(d) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: d.id,
      id_food: 0
    });
  },
  selectAdds(d) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: 1
    });
  },
  createCategory() {
    dispatch({
      type: "CREATE_CATEGORY",
      something_to_show: 1,
      id_category: 0
    });
  },
  editCategory(d) {
    dispatch({
      type: "EDIT_CATEGORY",
      something_to_show: 1,
      id_category: d.id
    });
  },
  selectModds() {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: -2
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAll);
