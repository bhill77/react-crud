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
                <button className="button is-primary">Edit</button>
                <button className="button is-danger">Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
