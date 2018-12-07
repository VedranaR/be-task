import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jules Verne",
        email: "jverne@gmail.com",
        phone: "123-456-789"
      },
      {
        id: 2,
        name: "Mary Shelley",
        email: "mshelle@gmail.com",
        phone: "010-123-456"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
