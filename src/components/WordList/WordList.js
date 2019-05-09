import React from 'react';
import styles from './WordList.module.css';

const WordList = (props) => {
  return (
    <div className={styles['word-list']}>
      {props.items}
    </div>
  )
}

export default WordList;
