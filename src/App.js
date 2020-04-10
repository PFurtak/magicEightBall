import React, { useState, useEffect } from 'react';
import './App.css';
import UserQuestion from './components/UserQuestion';
import AnswerResponse from './components/AnswerResponse';

const App = () => {
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://8ball.delegator.com/magic/JSON/"${query}"`)
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.magic.answer);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Magic Eight Ball</h1>
        <h2> What do you seek? </h2>
        <UserQuestion questionText={(text) => setQuery(text)} />
        <br />
        <div>
          {query === '' ? (
            <h3>Your answer awaits...</h3>
          ) : (
            <AnswerResponse response={response} />
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
