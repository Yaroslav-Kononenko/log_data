import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { PeoplePage } from './components/PeoplePage';
import { Toolbar } from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Toolbar/>
      <PeoplePage />
    </div>
  );
}

export default React.memo(App);
