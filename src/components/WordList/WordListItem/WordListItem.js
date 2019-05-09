import React from 'react';
import styles from './WordListItem.module.css';

const WordListItem = (props) => {
  return (
    <div className={styles['word-list-item']} nth={props.nth}>
      <div
      className={styles.cover}
      onMouseOver={props.over}
      onMouseOut={props.out}/>
      <p>{props.word}</p>
      <p>{props.value}</p>
    </div>
  )
}

export default WordListItem;
