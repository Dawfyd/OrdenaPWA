import React from "react";
import { Avatar } from "antd";
import { connect } from "react-redux";

const AvatarHome = ({ persons, services }) => (
  <section>
    <div>
      <hr id="separator_avatar" />
      <div className="avatar_list">
        {persons.map((d) => (
          <div key={d.id} className="order_avatar">
            <div>
              <Avatar className="avatar" src={d.photo} />
            </div>
            <div className="text_name">{d.username}</div>
          </div>
        ))}
      </div>
      <hr id="separator_avatar_bottom" />
      <div className="text_service_box">
        <p className="text_service">
          Atendido por el mesero{" "}
          {services.reduce((accumulator, b) => b.alias_service, 0)}
        </p>
      </div>
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  persons: state.persons,
  services: state.services,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarHome);
