import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import СontactForm from "./components/ContactForm/ContactForm";
// import style from "./components/Title/Title.module.css";
import s from "./components/ContactForm/ContactForm.module.css";
import Title from "./components/Title/Title";
import { ToastContainer } from "react-toastify";
import phonebookOperation from "../src/redux/phonebook/phonebook-operation";
import "react-toastify/dist/ReactToastify.css";
import HomeView from "./components/views/HomeView";
import LoginView from "./components/views/LoginView";
import RegistrView from "./components/views/RegistrView";
import NavBar from "./components/AppBar/NavBar";

import "./App.css";

class Phonebook extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
        <NavBar />
        <ToastContainer autoClose={3000} />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/registration" component={RegistrView} />
          <Route exact path="/login" component={LoginView} />
        </Switch>
        <Title />
        <Form />
        <Filter />
        <СontactForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperation.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Phonebook);
