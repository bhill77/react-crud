import React, { Component } from 'react';

export default class ContactList extends Component {
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
      </table>
    );
  }
}
