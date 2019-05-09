import React from 'react';
import styles from './TextInput.module.css';

const TextInput = (props) => {
  return (
    <div className={styles['text-input']}>
      <input type='text' value={props.value} onChange={props.changeText}/>
      <div className={styles.btn}>Submit</div>
    </div>
  )
}

export default TextInput;
