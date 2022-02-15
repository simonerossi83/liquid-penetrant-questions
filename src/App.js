import './App.css';
import React from 'react';
import {Header} from './Header';
import {Questions} from './Questions.jsx';

function App() {

  return (
      <>
        <Header />
       <Questions maxQuestions={2}/>
      </>
  );
}

export default App;
