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
      currentContact: { name: '', email: '', phone: '' },
      formTitle: null,
      mode: 'add'
    }
  }

  fecthData = () => {
    axios.get('http://localhost:8000/api').then((res)=>{
      console.log('success');
    })
  }

  addContact = () => {
    this.resetForm();
    this.setState({ formIsOpen: true, mode: 'add' });
  }

  resetForm = () => {
    this.setState({ currentContact: { name: '', email: '', phone: '' } });
  }

  closeForm = () => {
    this.setState({ formIsOpen: false });
  }

  updateContactField = (field, value) => {
    const contact = this.state.currentContact;
    contact[field] = value;
    this.setState({ currentContact: contact });
  }

  componentDidMount() {
    this.fecthData();
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <button className="button is-info" onClick={this.addContact}>Add Contact</button>
          <ContactList />
        </div>
        <ContactForm
          title={this.state.formTitle}
          isOpen={this.state.formIsOpen}
          onClose={this.closeForm}
          contact={this.state.currentContact}
          onChange={this.updateContactField}
          mode={this.state.mode}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
