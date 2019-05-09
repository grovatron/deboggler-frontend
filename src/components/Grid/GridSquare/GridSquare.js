import React from 'react';
import styles from './GridSquare.module.css';

const GridSquare = (props) => {
  return (
    <div
      className={styles['grid-square']}
      points={props.value !== 0 ? props.value : null}
      mod={props.modifier !== 'none' ? props.modifier : null}>
      <input
        type='text'
        value={props.letter}
        onChange={props.changeLetter}
        name='letter'
        autoComplete='off'/>
    </div>
  )
}

export default GridSquare;
