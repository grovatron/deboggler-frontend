import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Deboggler from './components/Deboggler/Deboggler';
import Footer from './components/Footer/Footer';
import Letter from './models/Letter';
import { isValidLetter, isValidTextInput, letterInputsValid } from './util/validation';
import { valueMapping } from './util/data';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bootingUp: true,
      messageText: 'Connecting...',
      scoringSystem: 'with friends',
      letterObjs: Array(16).fill(null).map(letterObj => new Letter()),
      cachedLetterObjs: null,
      words: null,
      filter: null,
      textInput: ''
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
      console.log('not valid');
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

  changeTextInputHandler = (event) => {
    const textInput = event.target.value.toUpperCase();
    const size = this.state.letterObjs.length;
    if (!isValidTextInput(textInput, size)) {
      return;
    }
    const letterObjs = Array(size).fill(null).map(letterObj => new Letter());
    for (let i = 0; i < textInput.length; i++) {
      const letter = textInput.charAt(i) === 'Q' ? 'QU' : textInput.charAt(i);
      const value = valueMapping[letter.toLowerCase()];
      letterObjs[i].letter = letter;
      letterObjs[i].value = value;
    }
    this.setState({
      letterObjs,
      textInput
    });
  }

  handleSubmit = (event) => {
    const letterInputs = this.state.letterObjs;
    if (!letterInputsValid(letterInputs)) {
      return;
    }
    const scoringSystem = this.state.scoringSystem;
    axios.post(process.env.REACT_APP_SERVICE, {
      scoringSystem: scoringSystem,
      letterInputs: letterInputs
    })
      .then(response => {
        const words = response.data.sort((a, b) => {
          let result = b.value - a.value;
          if (result === 0) {
            result = a.word - b.word;
          }
          return result;
        });
        this.setState({
          words,
          cachedLetterObjs: letterInputs,
          filter: null
        });
      })
      .catch(err => console.log(err));
  }

  handleChangeScoringSystem = (event) => {
    const scoringSystem = event.target.value;
    this.setState({ scoringSystem});
  }

  handleChangeSize = (event) => {
    const size = parseInt(event.target.value);
    const letterObjs = Array(size).fill(null).map(letterObj => new Letter());
    this.setState({
      letterObjs,
      textInput: ''
     });
  }

  handleMouseOver = (i) => {
    const filter = this.state.words[i].location;
    this.setState({filter});
  }

  handleMouseOut = () => {
    this.setState({filter: null});
  }

  render() {

    const { letterObjs,
      cachedLetterObjs,
      words,
      textInput,
      scoringSystem,
      filter
    } = this.state;

    return (
      <div>
        {this.state.bootingUp ? <Modal message={this.state.messageText}/> : null}
        <Header title="The Deboggler"/>
        <Deboggler
          letterObjs={letterObjs}
          cachedLetterObjs={cachedLetterObjs}
          words={words}
          filter={filter}
          textInput={textInput}
          scoringSystem={scoringSystem}
          changeLetter={(i, event) => this.changeLetterHandler(i, event)}
          changeMod={(i, mod) => this.changeModifierHandler(i, mod)}
          changeText={(event) => this.changeTextInputHandler(event)}
          handleSubmit={(event) => this.handleSubmit(event)}
          changeScoring={(event) => this.handleChangeScoringSystem(event)}
          changeSize={(event) => this.handleChangeSize(event)}
          handleOver={(i) => this.handleMouseOver(i)}
          handleOut={this.handleMouseOut}/>
        <Footer />
      </div>
    );
  }

}

export default App;
