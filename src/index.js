import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header';
import ContactList from './components/ContactList';

class App extends React.Component {
  fecthData() {
    axios.get('http://localhost:8000/api').then((res)=>{
      console.log('success');
    })
  }

  componentDidMount() {
    this.fecthData();
  }

  render() {
    return (
      <div>
        <Header />
        <ContactList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
