import React from 'react';
import styles from './MenuStrip.module.css';

const MenuStrip = (props) => {
  return (
    <div className={styles['menu-strip']}>
      <select name="scoring-system" value={props.scoringSystem} onChange={props.changeScoring}>
        <option value='with friends'>Boggle With Friends</option>
        <option value='original'>Original Boggle</option>
      </select>
      <select name='grid-size' value={props.size} onChange={props.changeSize}>
        <option value="4">2 x 2</option>
        <option value="9">3 x 3</option>
        <option value="16">4 x 4</option>
        <option value="25">5 x 5</option>
      </select>
    </div>
  )
}

export default MenuStrip;
