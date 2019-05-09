import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Deboggler from './components/Deboggler/Deboggler';
import Footer from './components/Footer/Footer';
import Letter from './models/Letter';
import { isValidLetter } from './util/validation';
import { valueMapping } from './util/data';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bootingUp: true,
      messageText: 'Connecting...',
      letterObjs: Array(16).fill(null).map(letterObj => new Letter())
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

  changeLetterHandler = (i, event) => {
    const letter = event.target.value.toUpperCase();
    if (!isValidLetter(letter)) {
      return;
    }
    const letterObjs = this.state.letterObjs.map(letterObj => Object.assign({}, letterObj));
    letterObjs[i].letter = letter;
    letterObjs[i].value = valueMapping[letter.toLowerCase()];
    this.setState({ letterObjs });
  }

  changeModifierHandler = (i, modifier) => {
    const letterObjs = this.state.letterObjs.map(letterObj => Object.assign({}, letterObj));
    letterObjs[i].modifier = modifier;
    this.setState({ letterObjs });
  }

  render() {

    const letterObjs = this.state.letterObjs;

    return (
      <div>
        {this.state.bootingUp ? <Modal message={this.state.messageText}/> : null}
        <Header title="The Deboggler"/>
        <Deboggler
          letterObjs={letterObjs}
          changeLetter={(i, event) => this.changeLetterHandler(i, event)}
          changeMod={(i, mod) => this.changeModifierHandler(i, mod)}/>
        <Footer />
      </div>
    );
  }

}

export default App;
