import React from 'react';
import SunIcon from '../assets/desktop/icon-sun.svg';
import UpArrow from '../assets/desktop/icon-arrow-up.svg';
import styles from '../components/Clock.module.css';

const Clock = () => {
  return (
    <section id={styles['clock-container']}>
      <div className={`flex ${styles['clock-wrapper']}`}>
        <div className={`flex ${styles['greeting']}`}>
          <div>
            <img src={SunIcon} alt="sunny"></img>
          </div>
          <h2 className="greeting-txt">Good Morning</h2>
        </div>
        <div className={`flex ${styles['time']}`}>
          <p className="time-txt">11:37</p>
          <p className="timezone-txt">bst</p>
        </div>
        <div className={styles['location']}>
          <p className="location-txt">in London, UK</p>
        </div>
      </div>
      <button className={styles['details-btn']}>
        <span className="detail-txt">More</span>
        <img className={styles['arrow']} src={UpArrow} alt="show details"></img>
      </button>
    </section>
  );
};

export default Clock;
