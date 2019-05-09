import React from 'react';
import styles from './TextInput.module.css';

const TextInput = (props) => {
  return (
    <div className={styles['text-input']}>
      <div className={styles['input-wrapper']}>
        <input
          type='text'
          value={props.value}
          onChange={props.changeText}/>
        <div className={styles.btn} onClick={props.handleSubmit}>Submit</div>
      </div>
      <p>Click the squares to add modifiers!</p>
    </div>
  )
}

export default TextInput;
