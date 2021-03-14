import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

function Navigation({ isAuthenticated }) {
  return (
    <div>
      <NavLink exact to="/">
        Главная
      </NavLink>

      {isAuthenticated && (
        <NavLink exact to="/contacts">
          Контакты
        </NavLink>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
