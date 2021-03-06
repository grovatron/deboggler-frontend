import React from 'react';
import styles from './GridSquare.module.css';

const GridSquare = (props) => {

  const value = props.value !== 0 ? props.value : null;
  const mod = props.modifier !== 'none' ? props.modifier: null;
  const modStyle = mod ? mod.toLowerCase() : null
  const selectedStyle = props.selected ? 'selected' : null;

  return (
    <div className={[styles['grid-square'], styles[modStyle], styles[selectedStyle]].join(' ')} points={value} mod={mod}>
      <input
        type='text'
        value={props.letter}
        onChange={props.changeLetter}
        name='letter'
        autoComplete='off'/>
        <div
          className={`${styles.selector} ${styles['mod-none']}`}
          onMouseDown={() => props.changeMod('none')}>
          {'None'}
        </div>
        <div
          className={`${styles.selector} ${styles['mod-dl']}`}
          onMouseDown={() => props.changeMod('DL')}>
          {'DL'}
        </div>
        <div
          className={`${styles.selector} ${styles['mod-dw']}`}
          onMouseDown={() => props.changeMod('DW')}>
          {'DW'}
        </div>
        <div
          className={`${styles.selector} ${styles['mod-tl']}`}
          onMouseDown={() => props.changeMod('TL')}>
          {'TL'}
        </div>
        <div
          className={`${styles.selector} ${styles['mod-tw']}`}
          onMouseDown={() => props.changeMod('TW')}>
          {'TW'}
        </div>
        <div className={`${styles.connector} ${styles[props.connectorStyle]}`}></div>
    </div>
  )
}

export default GridSquare;
