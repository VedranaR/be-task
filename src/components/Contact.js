import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardColorBlack: "#000000",
      colorIsBlack: true,
      editContent: false,
      randomColors: [],
      randomColor: ""
    };
  }

  componentDidMount() {
    fetch("http://www.colr.org/json/color/random/")
      .then(response => response.json())
      .then(data => {
        this.state.randomColors[0] = "#" + data.new_color;
      });

    fetch("http://www.colr.org/json/color/random/")
      .then(response => response.json())
      .then(data => {
        this.state.randomColors[1] = "#" + data.new_color;
      });
  }

  getRandomColor = e => {
    let col = Math.floor(Math.random() * 2);
    this.setState({ randomColor: this.state.randomColors[col] });
  };

  changeColor = e => {
    this.setState({ colorIsBlack: !this.state.colorIsBlack });
  };

  toggleInput = e => {
    this.setState({ editContent: !this.state.editContent });
  };

  render() {
    const { name, email, phone } = this.props;
    const { cardColorBlack } = this.state;
    const { colorIsBlack } = this.state;
    const { editContent } = this.state;
    const { randomColor } = this.state;

    return (
      <div
        className="card card-body mb-3"
        onClick={(this.getRandomColor, this.changeColor)}
        style={colorIsBlack ? { cardColorBlack } : { randomColor }}
      >
        <h4>
          {name}
          <i
            className="fas fa-user-edit"
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

// const cardColorDefault = {
//   color: "black"
// };

// const cardColorRandom = {
//   color: cardColorTwo
// };

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
