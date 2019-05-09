import React from 'react';
import styles from './GridSquare.module.css';

const GridSquare = (props) => {
  return (
    <div className={styles['grid-square']} points={props.value} mod={props.modifier}>
      <input type='text' value={props.letter} name='letter' autoComplete='off'/>
    </div>
  )
}

export default GridSquare;
