import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={styles['footer']}>
      Project by <a href='https://github.com/grovatron' target="_blank">Grover Sundstrom</a>
    </div>
  )
}

export default Footer;
