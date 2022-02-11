import {Container, Typography, Grid, Button, ButtonGroup} from '@mui/material';
import React from 'react';
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

	/*
	const list = [...Array(100).keys()].map(x => ({ id: x }));
const App = () => {
  const [selected, setSelected] = React.useState([]); // init with empty list
  const onChangeHandler = id => () => {               // pass index/identify params
    selected.includes(id)                             // check whether been checked
      ? setSelected(selected.filter(x => x !== id))   // yes, remove
      : setSelected([...selected, id]);               // no, add
  };
  const onRemove = () => {
    setSelected([]);                                  // remove all, set to empty list
  };
  return (
    <div className="App">
      {list.map(item => (
        <input
          type="checkbox"
          key={item.id}
          checked={selected.includes(item.id)}
          onChange={onChangeHandler(item.id)}
        />
      ))}
      <br />
      <button onClick={onRemove}>Remove all</button>
      <div>{selected.join(",")}</div>
    </div>
  );

	*/
	
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
					))}
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