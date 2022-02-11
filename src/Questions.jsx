import {Container, Typography, Grid, Button, ButtonGroup} from '@mui/material';
import React from 'react';
import {useState} from 'react';
import {QUESTIONS} from './question-data';
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


export function Questions(){
	
	const [randomQuestion, setRandomQuestion] = useState(Math.floor(Math.random()*QUESTIONS.length));
	const [colorAnswer, setcolorAnswer] = useState(Array(4).fill('primary'));
	const [disabled, setDisabled] = useState(Array(4).fill(false));
	const [variant, setVariant] = useState(Array(4).fill('outlined'));
	const [showAnswer, setShowAnswer] = useState(false);
	const [correct, setCorrect] = useState(false);

	const changeQuestion = () => {
		setRandomQuestion(Math.floor(Math.random()*QUESTIONS.length));
		setcolorAnswer(Array(4).fill('primary'));
		setVariant(Array(4).fill('outlined'));
		setDisabled(Array(4).fill(false));
		setShowAnswer(false);
		setCorrect(false);
	}

	const checkAnswer = ({target}) => {
		let newColorArray = [...colorAnswer];
		let newVariantArray = [...variant];
		let newDisabledArray = Array(4).fill(true);
		newColorArray[target.id] = target.value === QUESTIONS[randomQuestion].correctAnswer ? 'success' : 'error';
		setCorrect(target.value === QUESTIONS[randomQuestion].correctAnswer);
		newVariantArray[target.id] = 'contained';
		setcolorAnswer(newColorArray);
		newDisabledArray[target.id] = false;
		setVariant(newVariantArray);
		setDisabled(newDisabledArray);
		setShowAnswer(true);
	}

	
	return (
		<>
			<Container maxWidth="lg">

			<Typography variant="h5" 
			sx={{ 
				marginTop: 10,
				marginBottom: 10
				}}> 
				{QUESTIONS[randomQuestion].question}
			</Typography>

			<ButtonGroup orientation="vertical" 
			sx={{ 
				display: 'flex',
				marginBottom: 10
				}}> 
					{QUESTIONS[randomQuestion].answers.map( (question, index) => (
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

			{showAnswer && (
				<>
					<Typography 
					variant="h4"
					sx={{ 
						marginBottom: 10
						}} >
						{correct ? 'Corretto!' : 'Sbagliato :('}
					</Typography>
					<Typography>
						{QUESTIONS[randomQuestion].explanation}
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

		</Container>
		</>
	)
  }