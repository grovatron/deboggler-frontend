import React, { Component }from 'react';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Deboggler from './components/Deboggler/Deboggler';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal />
        <Header />
        <Deboggler />
        <Footer />
      </div>
    );
  }

}

export default App;
