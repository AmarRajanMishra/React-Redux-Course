import React from 'react';

import './App.css';
import Counter from './features/counter/Counter';
import CounterTwo from './features/CounterTwo';
import ThemeChange from './features/theme/ThemeChange';


function App() {

    
  return (
    <div className="App">
      <ThemeChange />
    <Counter />
    <CounterTwo />
    </div>
  );
}

export default App;
