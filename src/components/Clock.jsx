import React from 'react';
import SunIcon from '../assets/desktop/icon-sun.svg';
import MoonIcon from '../assets/desktop/icon-moon.svg';
import UpArrow from '../assets/desktop/icon-arrow-up.svg';
import styles from '../components/Clock.module.css';

const Clock = ({
  time,
  location,
  toggleDetails,
  toggleButtonTxt,
  isActive,
}) => {
  let currTime = new Date(time.datetime).toLocaleString('en-us', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  let formattedTime = currTime.slice(0, -2);
  let hours = new Date(time.datetime).getHours();

  let timeOfDayTxt = '';
  if (hours >= 5 && hours < 12) {
    timeOfDayTxt = 'Good Morning';
  } else if (hours >= 12 && hours < 18) {
    timeOfDayTxt = 'Good Afternoon';
  } else {
    timeOfDayTxt = 'Good Evening';
  }

  let timeOfDayIcon =
    timeOfDayTxt === 'Good Morning' || timeOfDayTxt === 'Good Afternoon'
      ? SunIcon
      : MoonIcon;

  let btnActive = isActive ? 'active' : '';

  return (
    <section className={styles['clock-container']}>
      <div className={`flex ${styles['clock-wrapper']}`}>
        <div className={`flex ${styles['greeting']}`}>
          <div>
            <img src={timeOfDayIcon} alt="sunny"></img>
          </div>
          <h2 className="greeting-txt">
            {timeOfDayTxt}
            <span className="lg-view">, it's Currently</span>
          </h2>
        </div>
        <div className={`flex ${styles['time']}`}>
          <p className="time-txt">{formattedTime}</p>
          <p className="timezone-txt">{time.abbreviation}</p>
        </div>
        <div className={styles['location']}>
          <p className="location-txt">{`in ${location.city}, ${location.region_code}`}</p>
        </div>
      </div>
      <button className={styles['details-btn']} onClick={toggleDetails}>
        <span className="detail-txt">{toggleButtonTxt ? 'less' : 'more'}</span>
        <img
          className={`${btnActive} ${styles['arrow']}`}
          src={UpArrow}
          alt="show details"
        ></img>
      </button>
      {/* Use state to keep track of button press 
      pass state down to details component to decide whether to display or not */}
    </section>
  );
};

export default Clock;
