import {Container, Typography, Grid, Button, ButtonGroup} from '@mui/material';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import React from 'react';
import {useState} from 'react';
import {QUESTIONS} from './question-data';
import PropTypes from "prop-types";

let newQUESTIONS = [...QUESTIONS];


export function Questions(props){
	
	const [randomQuestion, setRandomQuestion] = useState(Math.floor(Math.random()*newQUESTIONS.length));
	const [colorAnswer, setcolorAnswer] = useState(Array(4).fill('primary'));
	const [disabled, setDisabled] = useState(Array(4).fill(false));
	const [variant, setVariant] = useState(Array(4).fill('outlined'));
	const [showAnswer, setShowAnswer] = useState(false);
	const [correct, setCorrect] = useState(false);
	const [points, setPoints] = useState(0);
	const [maxQuestions, setMaxQuestions] = useState(props.maxQuestions-1);

	const changeQuestion = () => {
		newQUESTIONS = newQUESTIONS.filter((el,index) => index != randomQuestion);
		setRandomQuestion(Math.floor(Math.random()*newQUESTIONS.length));
		setcolorAnswer(Array(4).fill('primary'));
		setVariant(Array(4).fill('outlined'));
		setDisabled(Array(4).fill(false));
		setShowAnswer(false);
		setCorrect(false);
		setMaxQuestions(prev => prev - 1)
;	}

	const checkAnswer = ({target}) => {
		let newColorArray = [...colorAnswer];
		let newVariantArray = [...variant];
		let newDisabledArray = Array(4).fill(true);
		newColorArray[target.id] = target.value === newQUESTIONS[randomQuestion].correctAnswer ? 'success' : 'error';
		let result = target.value === newQUESTIONS[randomQuestion].correctAnswer;
		setCorrect(result);
		newVariantArray[target.id] = 'contained';
		setcolorAnswer(newColorArray);
		newDisabledArray[target.id] = false;
		setVariant(newVariantArray);
		setDisabled(newDisabledArray);
		setShowAnswer(true);
		if(result){
			setPoints((prev => prev + 1));
		}
	}

	
	return (
		<>
			<Container maxWidth="lg">
{console.log(maxQuestions)}
			<Typography variant="h5" 
			sx={{ 
				marginTop: 10,
				marginBottom: 10
				}}> 
				{newQUESTIONS[randomQuestion].question}
			</Typography>

			<ButtonGroup orientation="vertical" 
			sx={{ 
				display: 'flex',
				marginBottom: 10
				}}> 
					{newQUESTIONS[randomQuestion].answers.map( (question, index) => (
						<Button 
							fullwidth 
							id={index}
							key={index}
							value={question}
							sx={{
								padding: 2,
								justifyContent: "flex-start",
								textTransform: "none"
							}}
							onClick={checkAnswer}
							color={colorAnswer[index]}
							variant={variant[index]}
							disabled={disabled[index]}
							>
								{question}
						</Button>
					))}
			</ButtonGroup>

			{(showAnswer && maxQuestions != 0) && (
				<>
					<Typography 
					variant="h4"
					sx={{ 
						marginBottom: 10
						}} >
						{correct ? 'Corretto!' : 'Sbagliato :('}
					</Typography>
					<Typography>
						{newQUESTIONS[randomQuestion].explanation}
					</Typography>
					<Grid container justifyContent="flex-end">
						<Button 
							variant="contained" 
							onClick={changeQuestion}
						>
							Avanti
						</Button>
					</Grid>
				</>
			)}

			{(showAnswer && maxQuestions === 0) && (
				<Grid container justifyContent="flex-end">
					<Router>
						<Button 
							component={RouterLink} to="./Results.jsx"
							variant="contained" 
							points={points}
						>
							{points}Vedi risultati
						</Button>
					</Router>
				</Grid>
			)}

		</Container>
		</>
	)
  }

  Questions.propTypes = {
    maxQuestions: PropTypes.number
};