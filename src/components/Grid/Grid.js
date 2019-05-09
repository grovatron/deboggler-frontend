import React from 'react';
import GridSquare from './GridSquare/GridSquare';
import { getGridDimension, getIndex } from '../../util/util';
import styles from './Grid.module.css';

const Grid = (props) => {

  const dimensions = getGridDimension(props.letterObjs);
  const rows = [];

  for (let i = 0; i < dimensions; i++) {
    const row = [];
    for (let j = 0; j < dimensions; j++) {
      const index = getIndex(dimensions, i, j);
      const letter = props.letterObjs[index].letter;
      const value = props.letterObjs[index].value;
      const modifier = props.letterObjs[index].modifier;
      row.push(
        <GridSquare letter={letter} value={value} modifier={modifier} key={index} />
      );
    }
    rows.push(
      <div key={i}>{row}</div>
    );
  }

  return (
    <div className={styles.grid}>
      {rows}
    </div>
  )
}

export default Grid;
