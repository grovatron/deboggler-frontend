import React from 'react';
import styles from './GridContainer.module.css';

const GridContainer = (props) => {
  return (
    <div className={styles['grid-container']}>
      {props.children}
    </div>
  )
}

export default GridContainer;
