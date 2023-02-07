import React, { useState, useEffect, useCallback } from 'react';
import Clock from './components/Clock';
import DetailView from './components/DetailView';
import Quote from './components/Quote';

function App() {
  const [quote, setQuote] = useState([]);
  const [time, setTime] = useState([]);
  const [location, setLocation] = useState([]);
  const [show, setShow] = useState(false);
  const [timeDay, setTimeDay] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const checkTimeOfDay = time => {
    let currHours = new Date(time).getHours();
    if (currHours >= 5 && currHours < 18) {
      setTimeDay(true);
    } else {
      setTimeDay(false);
    }
  };

  const getTimeAndLocationData = useCallback(async () => {
    const timeUrl = 'https://worldtimeapi.org/api/ip';
    const locationUrl = `https://ipapi.co/json`;
    try {
      const responses = await Promise.all([fetch(timeUrl), fetch(locationUrl)]);

      const timeData = await responses[0].json();
      const locationResponse = await responses[1].json();

      setTime(timeData);
      checkTimeOfDay(timeData.datetime);
      setLocation(locationResponse);
    } catch (err) {
      alert(err);
    }
  }, []);

  const getQuote = useCallback(async () => {
    const quoteUrl = 'https://api.quotable.io/random/';
    try {
      const response = await fetch(quoteUrl);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const quoteData = await response.json();
      setQuote(quoteData);
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    getQuote();
    getTimeAndLocationData();
  }, [getQuote, getTimeAndLocationData]);

  const toggleDetails = () => {
    setShow(!show);
    setIsActive(!isActive);
  };

  return (
    <main className={timeDay ? 'day' : 'night'}>
      <div className={'container'}>
        <Quote quote={quote} getQuoteHandler={getQuote} toggleHide={show} />
        <Clock
          time={time}
          location={location}
          toggleDetails={toggleDetails}
          toggleButtonTxt={show}
          isActive={isActive}
        />
        <DetailView details={time} showDetails={show} timeOfDay={timeDay} />
      </div>
    </main>
  );
}

export default App;
