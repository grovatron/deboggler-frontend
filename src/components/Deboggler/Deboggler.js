import React from 'react'
import GridContainer from '../Grid/GridContainer/GridContainer';
import Grid from '../Grid/Grid';
import TextInput from '../TextInput/TextInput';
import MenuStrip from '../MenuStrip/MenuStrip';
import WordList from '../WordList/WordList';
import WordListItem from '../WordList/WordListItem/WordListItem';
import { areEqual } from '../../util/validation';

const Deboggler = (props) => {

  let wordListItems;
  if (props.words && areEqual(props.letterObjs, props.cachedLetterObjs)) {
    wordListItems = props.words.map((word, i) => (
      <WordListItem
        word={word.word}
        value={word.value}
        over={() => props.handleOver(i)}
        out={props.handleOut}
        key={i}
        nth={(i%2).toString()}/>
    ))
  }

  return (
    <>
      <GridContainer>
        <Grid
          letterObjs={props.letterObjs}
          changeLetter={(i, event) => props.changeLetter(i, event)}
          changeMod={(i, mod) => props.changeMod(i, mod)}
        />
      </GridContainer>
      <TextInput
        value={props.textInput}
        changeText={(event) => props.changeText(event)}
        handleSubmit={(event) => props.handleSubmit(event)}/>
      <MenuStrip
        scoringSystem={props.scoringSystem}
        size={props.letterObjs.length}
        changeScoring={(event) => props.changeScoring(event)}
        changeSize={(event) => props.changeSize(event)}/>
      <WordList items={wordListItems}/>
    </>
  );
}

export default Deboggler;
