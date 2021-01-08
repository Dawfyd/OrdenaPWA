import React from "react";
import { connect } from "react-redux";
import { CaretRightFilled } from "@ant-design/icons";

function List_all({ categorys_menu, showDish }) {
  return (
    <div className="container_list_all">
      {categorys_menu.map(d => (
        <div className="card_list_all">
          <div className="order_card_list_all">
            <button
              className="button_all_card"
              key={d.id}
              href="/dish"
              onClick={() => showDish(d)}
            >
              <div className="flechita_list_all">
                <CaretRightFilled />
              </div>

              <div className="title_list_all">{d.text}</div>
            </button>
            <button className="button_options_category">
              <div>...</div>
            </button>
          </div>
        </div>
      ))}
      <button className="button_add_category">+ Agregar Categoria</button>
    </div>
  );
}

const mapStateToProps = state => ({
  categorys_menu: state.categorys_menu
});

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}

const mapDispatchToProps = dispatch => ({
  showDish(d) {
    dispatch({
      type: "SHOW_CATEGORY"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List_all);
