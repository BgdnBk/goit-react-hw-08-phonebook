import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../../redux/auth/";

const NavBar = ({ IsAuthenticated }) => {
  <header>
    <Navigation />
    {IsAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>;
};

const mapStateToProps = (state) => ({
  IsAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
