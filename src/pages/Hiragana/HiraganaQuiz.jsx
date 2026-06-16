import React, { useState, useRef } from 'react';
import Canvas from '../../components/Canvas';
import Timer from '../../components/Timer';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Import the hiragana data
import hiraganaData from '../../data/hiragana.json';

//import './HiraganaQuiz.css';

// Quiz component - takes prop of specified time limit
// TODO: add option to loop through characters after all have been used
function HiraganaQuiz(props) {
	const startTime = props.time;
	const navigate = useNavigate();

	var quizList = hiraganaData;
	var quizListNames = [];
	var usedIndexes = {};

	// State for the list of submitted writings and the current index of the quiz list
	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [listIndex, setListIndex] = useState(Math.floor(Math.random() * Object.keys(quizList).length));
	var characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);

	// Preserve values of how many characters have been submitted so far and which ones have been used
	var usedCharacters = useRef({});
	var countUsedCharacter = useRef(0);

	// When the user submits a writing, add it to the list of submitted writings and generate a new character to write
	const submitWriting = (newWriting) => {

		usedCharacters.current[countUsedCharacter.current] = {
			character: quizList[listIndex][characterListIndex]['character'],
			onyomi: quizList[listIndex][characterListIndex]['romaji'],
		}

		countUsedCharacter.current += 1;
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		setListIndex(Math.floor(Math.random() * Object.keys(quizList).length));
		characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);

	}

	// When the timer ends, navigate to the Results component and pass the list of submitted writings and used characters as state
	function timerEnd() {
		alert("Time's up!");
		navigate('/kakuji/results', { state: { submittedWriting: submittedWriting, usedCharacters: usedCharacters.current } });

	};

	// Render the quiz component with the current character to write and the list of submitted writings
	return (
		<div>
			<Link to="../kakuji">
				<button className="btn btn-secondary">Quit</button>
			</Link>
			<Timer currentTime={startTime} timerEnd={timerEnd} />
			<br />
			<br />
			<div className='quiz-div'>
				<h2>onyomi: {quizList[listIndex][characterListIndex]['onyomi'].join('、')}</h2>
				<h2>kunyomi: {quizList[listIndex][characterListIndex]['kunyomi'].join('、')}</h2>
				<h2>definition: {quizList[listIndex][characterListIndex]['meaning'].join(', ')}</h2>
				<h2>level: {quizListNames[listIndex]}</h2>
				<br />
				<Canvas getWriting={submitWriting} />
			</div>
			<Link to="../kakuji/results" state={{ submittedWriting: submittedWriting, usedCharacters: usedCharacters.current }}>
				<button className="btn btn-secondary">See Results</button>
			</Link>

		</div>
	)
}

export default HiraganaQuiz;