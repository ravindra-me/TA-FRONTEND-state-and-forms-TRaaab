import React from "react";

class ValidateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = (event) => {
    let { name, value } = event.target;
    let error = this.state.error;
    console.log(error);
    switch (name) {
      case "username":
        error.username =
          value.length < 3 ? "Username must be at least 3 characters" : "";
        break;
      case "email":
        error.email = this.validateEmail(value) ? "" : "Email is invalid";
        break;
      case "password":
        error.password =
          value.length < 6 ? "Password must be at least 6 characters" : "";
        break;
      case "confirmPassword":
        error.confirmPassword = value ? "" : "Password2 is required";
        break;
      default:
        break;
    }
    this.setState({
      error,
      [name]: value,
    });
  };

  render() {
    let { username, email, password, confirmPassword } = this.state.error;
    return (
      <>
        <div className="container p-1">
          <form
            action=""
            className="w-1/3  mr-auto ml-auto bg-red-200 border-gray-500 p-8"
          >
            <h3 className="text-center text-4xl	">Register With Us</h3>
            <label for="username" className="mt-8 block">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              className="block w-full"
              onChange={this.handleInput}
            />
            <span className="text-red-500">{username}</span>
            <label for="email" className="mt-8 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="block w-full"
              onChange={this.handleInput}
            />
            <span className="text-red-500">{email}</span>
            <label for="password" className="mt-8 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="block w-full"
              onChange={this.handleInput}
            />
            <span className="text-red-500">{password}</span>
            <label for="confirm-password" className="mt-8 block">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Enter password again"
              className="block w-full"
              onChange={this.handleInput}
            />
            <span className="text-red-500">{confirmPassword}</span>
            <button
              type="submit"
              className="block w-full bg-green-700 mt-6 py-4"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ValidateForm;
