import React from 'react';
import Clock from './components/Clock';
import Quote from './components/Quote';

function App() {
  return (
    <main>
      <div className="container">
        <Quote />
        <Clock />
      </div>
    </main>
  );
}

export default App;
