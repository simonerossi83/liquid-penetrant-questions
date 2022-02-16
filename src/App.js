import './App.css';
import React from 'react';
import {Header} from './Header';
import {Questions} from './Questions';
import	{Results} from './Results';

function App() {

	const [isCompleted, setIsCompleted] = React.useState(false);
	const [points, setPoints] = React.useState(0);

	const maxSpecificQuestions = 20;

	const handleFinish = (completed, points) => {
		setIsCompleted(completed);
		setPoints(points);
	}

  return (
      <>
		<Header />
        {!isCompleted && (
		<>
			<Questions maxSpecificQuestions={maxSpecificQuestions} isFinish={handleFinish}/>
		</>
		)}
		
		{isCompleted && (
			<>
				<Results specificPoints={points} maxSpecificQuestions={maxSpecificQuestions}/>
			</>
		)}


      </>
  );
}

export default App;
