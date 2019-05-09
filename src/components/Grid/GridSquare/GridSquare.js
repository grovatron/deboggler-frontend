import React from 'react';
import styles from './GridSquare.module.css';

const GridSquare = (props) => {
  return (
    <div className={styles['grid-square']}>
      <input type='text' name='letter' autoComplete='off'/>
    </div>
  )
}

export default GridSquare;
