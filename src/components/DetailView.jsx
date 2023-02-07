import React from 'react';
import styles from '../components/DetailView.module.css';
const DetailView = ({ details, showDetails, timeOfDay }) => {
  let toggleDetails = showDetails ? 'show' : '';
  let bgDark = timeOfDay ? '' : 'dark';
  return (
    <section
      className={`${bgDark} ${styles['details-container']} ${toggleDetails}`}
    >
      <ul className={styles['details']}>
        <li className={styles['details-timezone']}>
          <h2>current timezone</h2>
          <p>{details.timezone}</p>
        </li>
        <li className={styles['details-year']}>
          <h2>day of the year</h2>
          <p>{details.day_of_year}</p>
        </li>
        <li className={styles['details-weekday']}>
          <h2>day of the week</h2>
          <p>{details.day_of_week}</p>
        </li>
        <li className={styles['details-week']}>
          <h2>week number</h2>
          <p>{details.week_number}</p>
        </li>
      </ul>
    </section>
  );
};

export default DetailView;
