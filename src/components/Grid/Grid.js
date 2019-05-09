import React from 'react';
import GridSquare from './GridSquare/GridSquare';
import { getGridDimension, getIndex, getConnectorStyle } from '../../util/util';
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

      let connectorStyle;
      let selected = false;
      if (props.filter && props.filter.includes(index)) {
        connectorStyle = getConnectorStyle(index, props.filter, dimensions);
        selected = true;
      }

      row.push(
        <GridSquare
          letter={letter}
          value={value}
          modifier={modifier}
          connectorStyle={connectorStyle}
          selected={selected}
          changeLetter={(event) => props.changeLetter(index, event)}
          changeMod={(mod) => props.changeMod(index, mod)}
          key={index} />
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
