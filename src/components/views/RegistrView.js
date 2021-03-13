import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";

class RegistrView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            name
            <input
              value={name}
              name="name"
              type="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              value={email}
              name="email"
              type="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              value={password}
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegistrView);
