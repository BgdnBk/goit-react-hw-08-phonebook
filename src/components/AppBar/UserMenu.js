import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = ({ name, onLogout }) => (
  <div>
    <span>Добро пожаловать, {name}</span>
    <button type="button" onClick={onLogout}>
      Выйти
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
