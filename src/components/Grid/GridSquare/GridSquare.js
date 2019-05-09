import React from 'react';
import styles from './GridSquare.module.css';

const GridSquare = (props) => {
  return (
    <div className={styles['grid-square']}>
      <input
        type='text'
        value={props.letter}
        points={props.value}
        mod={props.modifier}
        name='letter'
        autoComplete='off'/>
    </div>
  )
}

export default GridSquare;
