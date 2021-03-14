import React from "react";
import phonebookOperation from "../../redux/phonebook/phonebook-operation";
import { connect } from "react-redux";
import Form from "../Form/Form";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import Title from "../Title/Title";

function ContactsView() {
  // this.props.fetchContacts();
  return (
    <>
      <Title />
      <Form />
      <Filter />
      <ContactForm />
    </>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(phonebookOperation.fetchContacts()),
// });

export default ContactsView;
