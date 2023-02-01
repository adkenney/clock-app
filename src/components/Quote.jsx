import React from 'react';
import RefreshIcon from '../assets/desktop/icon-refresh.svg';
import styles from '../components/Quote.module.css';

const Quote = () => {
  return (
    <section id={styles['quote-container']}>
      <div className={styles['quote']}>
        <p className="quote-txt">
          &ldquo;The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.&rdquo;
        </p>
        <p className="author-txt">Ada Lovelace</p>
      </div>
      <div className={styles['refresh-btn-container']}>
        <button className={styles['refresh-btn']}>
          <img src={RefreshIcon} alt="refresh quote"></img>
        </button>
      </div>
    </section>
  );
};

export default Quote;
