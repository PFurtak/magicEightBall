import React, { useState, useEffect } from 'react';
import './App.css';
import UserQuestion from './components/UserQuestion';
import AnswerResponse from './components/AnswerResponse';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Magic Eight Ball</h1>
        <UserQuestion />
        <br />
        <AnswerResponse />
      </header>
    </div>
  );
};

export default App;
