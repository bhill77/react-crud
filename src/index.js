import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      formIsOpen: false,
      currentContact: { id: '', name: '', email: '', phone: '' },
      formTitle: null,
      mode: 'add',
      contacts: []
    }
  }

  fecthContacts = () => {
    axios.get('http://localhost:8000/api/contact').then((res)=>{
      this.setState({ contacts: res.data });
    })
  }

  addContact = () => {
    this.resetForm();
    this.setState({ formIsOpen: true, mode: 'add' });
  }

  editContact = (id) => {
    const contact = this.state.contacts.filter((data) => {
      return data.id == id;
    })[0];
    this.setState({ formIsOpen: true, currentContact: contact, mode: 'edit' })
  }

  resetForm = () => {
    this.setState({ currentContact: { id: '', name: '', email: '', phone: '' } });
  }

  closeForm = () => {
    this.setState({ formIsOpen: false });
  }

  updateContactField = (field, value) => {
    const contact = this.state.currentContact;
    contact[field] = value;
    this.setState({ currentContact: contact });
  }

  saveContact = () => {
    let url = 'http://localhost:8000/api/contact/';
    const config = { headers: { Accept: 'application/json' } }
    const data = { ...this.state.currentContact };
    if(this.state.mode == 'add'){
      this.storeContact(url, data, config);
    } else {
      url = url + data.id;
      this.updateContact(url, data, config);
    }
  }

  storeContact = (url, data, config) => {
    axios.post(url, data, config)
    .then((res) => {
      const contacts = this.state.contacts;
      contacts.push(res.data);
      this.setState({ contacts, formIsOpen: false });
    }).catch((err) => {
      console.log('error',err.response);
    })
  }

  updateContact = (url, data, config) => {
    axios.put(url, data, config)
    .then((res) => {
      this.setState({ formIsOpen: false });
    }).catch((err) => {
      console.log('error',err.response);
    })
  }

  componentDidMount() {
    this.fecthContacts();
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <button className="button is-info" onClick={this.addContact}>Add Contact</button>
          <ContactList data={this.state.contacts} onEdit={this.editContact} />
        </div>
        <ContactForm
          title={this.state.formTitle}
          isOpen={this.state.formIsOpen}
          onClose={this.closeForm}
          contact={this.state.currentContact}
          onChange={this.updateContactField}
          mode={this.state.mode}
          onSubmit={this.saveContact}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
