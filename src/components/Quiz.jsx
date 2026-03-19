import React, { useState } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';
import { Link, useLocation } from 'react-router-dom';

import n5Data from '../data/n5-kanji.json';
import n4Data from '../data/n4-kanji.json';
import n3Data from '../data/n3-kanji.json';
import n2Data from '../data/n2-kanji.json';
import n1Data from '../data/n1-kanji.json';

import './Quiz.css';

function Quiz(props) {
	const checkedList = props.content;
	const timer = props.time;

	var quizList = [];
	var quizListNames = [];
	var usedCharacters = [];
	var usedIndexes = {};

	// Generate the quiz list based on the checked checkboxes from the Start component
	for (let i = 0; i < checkedList.length; i++) {
		if (checkedList[i].checked) {
			if (checkedList[i].title == 'N5') {
				quizList = quizList.concat(n5Data);
				quizListNames.push('N5');
			} else if (checkedList[i].title == 'N4') {
				quizList = quizList.concat(n4Data);
				quizListNames.push('N4');
			} else if (checkedList[i].title == 'N3') {
				quizList = quizList.concat(n3Data);
				quizListNames.push('N3');
			} else if (checkedList[i].title == 'N2') {
				quizList = quizList.concat(n2Data);
				quizListNames.push('N2');
			} else if (checkedList[i].title == 'N1') {
				quizList = quizList.concat(n1Data);
				quizListNames.push('N1');
			}
		}
	}

	console.log(quizList)

	// State for the list of submitted writings and the current index of the quiz list
	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [listIndex, setListIndex] = useState(Math.floor(Math.random() * Object.keys(quizList).length));
	var characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);

	// When the user submits a writing, add it to the list of submitted writings and generate a new character to write
	const submitWriting = (newWriting) => {
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		setListIndex(Math.floor(Math.random() * Object.keys(quizList).length));
		characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);
		usedCharacters.push(quizList[listIndex][characterListIndex]);
		console.log(submittedWriting);
	};

	var listType = '';

	return (
		<div>
			<Link to="/..">
				<button className="btn btn-secondary">Quit</button>
			</Link>
			<Timer time={timer} />
			<div className='quiz-div'>
				<h2>onyomi: {quizList[listIndex][characterListIndex]['onyomi']}</h2>
				<h2>kunyomi: {quizList[listIndex][characterListIndex]['kunyomi']}</h2>
				<h2>definition: {quizList[listIndex][characterListIndex]['meaning']}</h2>
				<h2>level: {quizListNames[listIndex]}</h2>
				<Canvas getWriting={submitWriting} />
			</div>
			<img src={submittedWriting[submittedWriting.length - 1]} alt="Submitted writing" />
			<h2>Correct: {usedCharacters.length}</h2>
		</div>
	)
}

export default Quiz;