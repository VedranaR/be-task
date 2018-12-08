import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    colorIsBlack: true
  };

  changeColor = e => {
    this.setState({ colorIsBlack: !this.state.colorIsBlack });
  };
  render() {
    const { name, email, phone } = this.props;
    const { colorIsBlack } = this.state;
    return (
      <div
        className="card card-body mb-3"
        onClick={this.changeColor}
        style={colorIsBlack ? cardColorDefault : cardColorRandom}
      >
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

const cardColorDefault = {
  color: "black"
};

const cardColorRandom = {
  color: "red"
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
