import React from 'react';
import GridSquare from './GridSquare/GridSquare';
import styles from './Grid.module.css';

const Grid = (props) => {
  return (
    <div className={styles.grid}>
      <GridSquare />
    </div>
  )
}

export default Grid;
