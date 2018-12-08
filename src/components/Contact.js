import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    colorIsBlack: true,
    editContent: true
  };

  changeColor = e => {
    this.setState({ colorIsBlack: !this.state.colorIsBlack });
  };

  toggleInput = e => {
    this.setState({ editContent: !this.state.editContent });
  };
  render() {
    const { name, email, phone } = this.props;
    const { colorIsBlack } = this.state;
    const { editContent } = this.state;

    return (
      <div
        className="card card-body mb-3"
        onClick={this.changeColor}
        style={colorIsBlack ? cardColorDefault : cardColorRandom}
      >
        <h4>
          {name}
          <i
            class="fas fa-user-edit"
            style={{ cursor: "pointer", float: "right" }}
            onClick={this.toggleInput}
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
        {editContent ? (
          <div className="form-group">
            <label htmlFor="comment">Edit email</label>
            <input
              type="text"
              name="email"
              className="form-control form-control-sm"
              placeholder={email}
            />
            <label htmlFor="comment">Edit phone</label>
            <input
              type="text"
              name="phone"
              className="form-control form-control-sm"
              placeholder={phone}
            />
          </div>
        ) : null}
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
