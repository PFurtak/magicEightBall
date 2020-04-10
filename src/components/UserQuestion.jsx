import React, { useState } from 'react';

const UserQuestion = ({ questionText }) => {
  const [question, setQuestion] = useState('');

  const onChange = (e) => {
    setQuestion(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    questionText(question);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          onChange={onChange}
          type='text'
          placeholder='What is your inquiry?'
        />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default UserQuestion;
