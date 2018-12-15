import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addContent: false,
      randomColors: [],
      comment: "",
      style: {
        color: "black"
      }
    };

    fetch("http://www.colr.org/json/color/random")
      .then(response => response.json())
      .then(data => {
        this.state.randomColors[0] = "#" + data.new_color;
      });

    fetch("http://www.colr.org/json/color/random")
      .then(response => response.json())
      .then(data => {
        this.state.randomColors[1] = "#" + data.new_color;
      });
  }

  getRandomColor = () => {
    if (this.state.style.color === "black") {
      let col = Math.floor(Math.random() * 2);
      this.setState({ style: { color: this.state.randomColors[col] } });
    } else {
      this.setState({ style: { color: "black" } });
    }
  };

  toggleInput = () => {
    this.setState({ addContent: !this.state.addContent });
  };

  changeInput = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const { name, email, phone } = this.props;
    const { addContent } = this.state;

    return (
      <div
        className="card card-body mb-3"
        onClick={this.getRandomColor}
        style={this.state.style}
      >
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">
            Comment: {this.state.comment}
            <i
              className="fas fa-user-edit"
              style={{ cursor: "pointer", float: "right" }}
              onClick={this.toggleInput}
            />
          </li>
        </ul>
        {addContent ? (
          <div className="form-group">
            <label htmlFor="comment">Add comment</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="write a comment"
              onInput={this.changeInput}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
