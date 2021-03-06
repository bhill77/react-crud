import React, { Component } from 'react';

export default class ContactList extends Component {
  render(){
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { this.props.data.map((contact) =>
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  className="button is-primary"
                  onClick={(e) => this.props.onEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="button is-danger"
                  onClick={(e) => this.props.onDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
