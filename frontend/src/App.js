import logo from './logo.svg';
import './App.css';
import React from 'react';
import UsersList from './components/User';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      this.setState(
        {
          'users': response.data
        }
      );
    }).catch(error => { console.log('connection failed');} );

    
  }

  render () {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
