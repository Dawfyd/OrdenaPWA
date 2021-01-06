import React from "react";
import { connect } from "react-redux";

function TargetList({
  temp_category,
  categorys_menu,
  temp_menu,
  id_category,
  data_menu_f,
  data_menu,
  showDish,
  posts,
}) {
  if (id_category === 0) {
    return (
      <div>
        {categorys_menu.map((a) => (
          <div key={a.id}>
            <hr
              id="separator_title_card"
              style={
                data_menu.filter((k) => k.category === a.id - 1).length === 0
                  ? { display: "none" }
                  : { display: "flex" }
              }
            />
            <p
              className="title_cards"
              style={
                data_menu.filter((k) => k.category === a.id - 1).length === 0
                  ? { display: "none" }
                  : { display: "flex" }
              }
            >
              {a.text}
            </p>
            {data_menu
              .filter((k) => k.category === a.id - 1)
              .map((d) => (
                <button
                  className="link_card"
                  key={d.id}
                  href="/dish"
                  onClick={() => showDish(d)}
                >
                  <div className="card_list">
                    <div className="order_card">
                      <div>
                        <img className="img_card" alt="example" src={d.photo} />
                      </div>
                      <div className="text">
                        <div>
                          <div className="title">{d.product}</div>
                          <div className="description">{d.msg}</div>
                          <div className="cost">
                            ${formatNumber(d.price)} COP
                          </div>
                        </div>
                        <div className="plus">
                          <button className="button_plus">+</button>
                        </div>
                      </div>
                      <br />
                    </div>
                    <hr id="separator_card" />
                  </div>
                </button>
              ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {data_menu_f.map((d) => (
        <button
          className="link_card"
          key={d.id}
          href="/dish"
          onClick={() => showDish(d)}
        >
          <div className="card_list">
            <div className="order_card">
              <div>
                <img className="img_card" alt="example" src={d.photo} />
              </div>
              <div className="text">
                <div>
                  <div className="title">{d.product}</div>
                  <div className="description">{d.msg}</div>
                  <div className="cost">${formatNumber(d.price)} COP</div>
                </div>
                <div className="plus">
                  <button className="button_plus">+</button>
                </div>
              </div>
              <br />
            </div>
            <hr id="separator_card" />
          </div>
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data_menu_f: state.data_menu_f,
  id_category: state.id_category,
  data_menu: state.data_menu,
  posts: state.posts,
  temp_menu: state.temp_menu,
  categorys_menu: state.categorys_menu,
  temp_category: state.temp_category,
});

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}

const mapDispatchToProps = (dispatch) => ({
  showDish(d) {
    dispatch({
      type: "SHOW_DISH",
      showMenu: false,
      id_food: d.id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TargetList);
