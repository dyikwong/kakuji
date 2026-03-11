import React, { useState } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';
import { Link, useLocation } from 'react-router-dom';

import n5Data from '../data/n5-kanji.json';
import n4Data from '../data/n4-kanji.json';
import n3Data from '../data/n3-kanji.json';
import n2Data from '../data/n2-kanji.json';
import n1Data from '../data/n1-kanji.json';

function Quiz(props) {
	const checkedList = props.content;
	const timer = props.time;

	var quizList = [];
	for (let i = 0; i < checkedList.length; i++) {
		if (checkedList[i].checked) {
			if (checkedList[i].title == 'N5') {
				quizList = quizList.concat(n5Data);
			} else if (checkedList[i].title == 'N4') {
				quizList = quizList.concat(n4Data);
			} else if (checkedList[i].title == 'N3') {
				quizList = quizList.concat(n3Data);
			} else if (checkedList[i].title == 'N2') {
				quizList = quizList.concat(n2Data);
			} else if (checkedList[i].title == 'N1') {
				quizList = quizList.concat(n1Data);
			}
		}
	}

	console.log(quizList)

	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [listIndex, setListIndex] = useState(Math.floor(Math.random() * Object.keys(quizList).length));
	var characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);

	const submitWriting = (newWriting) => {
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		setListIndex(Math.floor(Math.random() * Object.keys(quizList).length));
		characterListIndex = Math.floor(Math.random() * Object.keys(quizList[listIndex]).length);
	};

	return (
		<div>
			<Link to="/..">
				<button className="btn btn-secondary">Quit</button>
			</Link>
			<Timer time={timer} />
			<h2>{characterListIndex}</h2>
			<h2>{listIndex}</h2>
			<h2>{quizList[listIndex][characterListIndex]['onyomi']}</h2>
			<h2>{quizList[listIndex][characterListIndex]['kunyomi']}</h2>
			<h2>{quizList[listIndex][characterListIndex]['meaning']}</h2>
			<Canvas getWriting={submitWriting} />
		</div>
	)
}

export default Quiz;