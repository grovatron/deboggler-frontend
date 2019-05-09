import React from 'react'
import GridContainer from '../Grid/GridContainer/GridContainer';
import Grid from '../Grid/Grid';
import TextInput from '../TextInput/TextInput';
import MenuStrip from '../MenuStrip/MenuStrip';
import WordList from '../WordList/WordList';

const Deboggler = (props) => {
  return (
    <>
      <GridContainer>
        <Grid
          letterObjs={props.letterObjs}
          changeLetter={(i, event) => props.changeLetter(i, event)}
        />
      </GridContainer>
      <TextInput />
      <MenuStrip />
      <WordList />
    </>
  );
}

export default Deboggler;
