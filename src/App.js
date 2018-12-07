import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="My contacts" />
        <div className="container">
          <Contact
            name="Jules Verne"
            email="jverne@gmail.com"
            phone="123-456-789"
          />
          <Contact
            name="Mary Shelley"
            email="mshelley@gmail.com"
            phone="010-456-789"
          />
        </div>
      </div>
    );
  }
}

export default App;
