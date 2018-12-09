import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardColorBlack: "#000000",
      editContent: true,
      cardColorOne: [],
      cardColorTwo: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("http://www.colr.org/json/color/random"),
      fetch("http://www.colr.org/json/color/random")
    ])
      .then(([response1, response2]) =>
        Promise.all([response1.json(), response2.json()])
      )
      .then(([data1, data2]) =>
        this.setState({
          cardColorOne: data1.colors,
          cardColorTwo: data2.colors
        })
      );

    getRandomColor = () => {
      let { cardColorOne } = this.state;
      let { cardColorTwo } = this.state;

      const bothColors = [
        cardColorOne.map(color => color.hex),
        cardColorTwo.map(color => color.hex)
      ];

      const randomColor = `#${Math.floor(Math.random() * bothColors.length)}`;

      this.setState({ randomColor: randomColor });
    };
  }
  changeColor = e => {
    this.setState({ colorIsBlack: !this.state.colorIsBlack });
  };

  toggleInput = e => {
    this.setState({ editContent: !this.state.editContent });
  };
  render() {
    const { name, email, phone } = this.props;
    const { cardColorBlack } = this.state;
    const { editContent } = this.state;
    const { randomColor } = this.state;

    return (
      <div
        className="card card-body mb-3"
        onClick={this.changeColor}
        style={colorIsBlack ? cardColorDefault : cardColorOne}
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
