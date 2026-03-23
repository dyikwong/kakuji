import React, { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import Timer from './Timer';
import { Link, useLocation } from 'react-router-dom';

import n5Data from '../data/kanji-n5.json';
import n4Data from '../data/kanji-n4.json';
import n3Data from '../data/kanji-n3.json';
import n2Data from '../data/kanji-n2.json';
import n1Data from '../data/kanji-n1.json';

import './Quiz.css';

function Quiz(props) {
	const checkedList = props.content;
	const timer = props.time;

	var quizList = [];
	var quizListNames = [];
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

	// Preserve values of how many characters have been submitted so far and which ones have been used
	var usedCharacters = useRef({});
	var countUsedCharacter = useRef(0);

	// When the user submits a writing, add it to the list of submitted writings and generate a new character to write
	const submitWriting = (newWriting) => {
		console.log(quizList[listIndex][characterListIndex]['meaning'].join(', '))
		var onyomiFormatted = quizList[listIndex][characterListIndex]['onyomi'].join('、　');
		var kunyomiFormatted = quizList[listIndex][characterListIndex]['kunyomi'].join('、　');
		var meaningFormatted = quizList[listIndex][characterListIndex]['meaning'].join(', ');

		usedCharacters.current[countUsedCharacter.current] = {
			level: quizListNames[listIndex],
			character: quizList[listIndex][characterListIndex]['kanji'],
			onyomi: quizList[listIndex][characterListIndex]['onyomi'].join('、　'),
			kunyomi: quizList[listIndex][characterListIndex]['kunyomi'].join('、　'),
			meaning: meaningFormatted
		}
		console.log(usedCharacters);
		countUsedCharacter.current += 1;
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		setListIndex(Math.floor(Math.random() * Object.keys(quizList).length));
		characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);

	}


	return (
		<div>
			<Link to="/..">
				<button className="btn btn-secondary">Quit</button>
			</Link>
			<Timer time={timer} />
			<div className='quiz-div'>
				<h2>onyomi: {quizList[listIndex][characterListIndex]['onyomi'].join('、')}</h2>
				<h2>kunyomi: {quizList[listIndex][characterListIndex]['kunyomi'].join('、')}</h2>
				<h2>definition: {quizList[listIndex][characterListIndex]['meaning'].join(', ')}</h2>
				<h2>level: {quizListNames[listIndex]}</h2>
				<Canvas getWriting={submitWriting} />
			</div>
			<img src={submittedWriting[submittedWriting.length - 1]} alt="Submitted writing" />
			<h2>Correct: {usedCharacters.length}</h2>
		</div>
	)
}

export default Quiz;