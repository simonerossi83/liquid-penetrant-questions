import {Container, Box, Typography, Grid, Button, ButtonGroup} from '@mui/material';
import {useState} from 'react';
import {QUESTIONS} from './question-data';


export function Questions(){
	
	const [randomQuestion, setRandomQuestion] = useState(Math.floor(Math.random()*QUESTIONS.length));
	const [colorAnswer, setcolorAnswer] = useState('primary');

	const changeQuestion = () => {
	  setRandomQuestion(Math.floor(Math.random()*QUESTIONS.length));
	  setcolorAnswer('primary')
	}

	const checkAnswer = ({target}) => {
		setcolorAnswer(target.value === QUESTIONS[randomQuestion].correctAnswer ? 'success' : 'error');
		console.log(target.id)
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
						color={colorAnswer}
						>
							{question}
					  </Button>
				  ) )}
		  </ButtonGroup>

		  <Grid container justifyContent="flex-end">
			 <Button 
			 	variant="contained" 
				 onClick={changeQuestion}
				 >
				Avanti
			</Button>
		  </Grid>

		</Container>
	  </>
	)
  }