import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const contact = this.props.contact;
    console.log(contact);
    return (
      <div className={this.props.isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            <button className="delete" aria-label="close" onClick={this.props.onClose}></button>
          </header>
          <section className="modal-card-body">
            <form id="contactForm">
              <input type="hidden" name="id" value={contact.id} />
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value={contact.name}
                    onChange={(e) => this.props.onChange('name', e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={(e) => this.props.onChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Phone"
                    value={contact.phone}
                    onChange={(e) => this.props.onChange('phone', e.target.value)}
                  />
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save</button>
            <button className="button" onClick={this.props.onClose}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}
