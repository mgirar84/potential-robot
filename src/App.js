import './App.css';
import React from 'react';
import { Videos } from './screens/Videos/Videos';
import { MainBanner } from './components/MainBanner/MainBanner';

const App = () => {

  //loading screen
  //fetch
  //handle errors
  //render content
  //filters
  return (
    <div className="App">
        <MainBanner />
        <Videos />
    </div>
  );
};

export default App;
