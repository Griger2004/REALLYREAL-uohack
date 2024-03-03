import React, { useState } from 'react';
import Home from './Home'; // Assuming Home component is defined in 'Home.js'
import './ClassCode.css';

function ClassCode() {
  const [classCode, setClassCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setClassCode(e.target.value);
    setIsValid(isValidCode(e.target.value));
  };

  const isValidCode = (code) => {
    return code === '123'; // HARD CODED :)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    } else {
      setErrorMessage('Invalid class code. Please try again.');
    }
  };

  if (submitted) {
    return <Home myCode={classCode} />;
  }

  return (
    <div className='container'>
      <h1>Enter Class Code</h1>
      <form onSubmit={handleSubmit} className='form-input'>
        <input
          type="text"
          placeholder="Enter your class code"
          className="codeInput"
          name="classCode"
          value={classCode}
          onChange={handleChange}
        />
        <br />
        {errorMessage && <p className='error-msg'>{errorMessage}</p>}
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
    </div>
  );
}

export default ClassCode;
