import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Deboggler from './components/Deboggler/Deboggler';
import Footer from './components/Footer/Footer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bootingUp: true,
      messageText: 'Connecting...'
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_PING)
      .then(response => {
        if (response.status === 200) {
          this.setState({bootingUp: false});
        }
      })
      .catch(err => this.setState({messageText: 'Cannot Connect'}));
  }

  render() {
    return (
      <div>
        {this.state.bootingUp ? <Modal message={this.state.messageText}/> : null}
        <Header title="The Deboggler"/>
        <Deboggler />
        <Footer />
      </div>
    );
  }

}

export default App;
