import React, { useState } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';
import { Link, useLocation } from 'react-router-dom';

function Quiz(props) {
	var characterList = {
		0: {
			'kanji': '日',
			'onyomi': 'ニチ, ジツ',
			'kunyomi': 'ひ, -び, -か',
			'meaning': 'day, sun, Japan, counter for days'
		},
		1: {
			'kanji': '一',
			'onyomi': 'イチ',
			'kunyomi': 'ひと（つ）',
			'meaning': 'one'
		},
	};

	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [characterListIndex, setCharacterListIndex] = useState(Math.floor(Math.random() * Object.keys(characterList).length)); // track which character/word

	const location = useLocation();
	const time = location.state.time;

	const submitWriting = (newWriting) => {
		//setIsSubmit(!isSubmit);
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		setCharacterListIndex(Math.floor(Math.random() * Object.keys(characterList).length));
		console.log(characterListIndex);
		console.log(submittedWriting);
	};

	return (
		<div>
			<Link to="/..">
				<button>Quit</button>
			</Link>
			<Timer />
			<h2>{characterListIndex}</h2>
			<h2>{characterList[characterListIndex]['onyomi']}</h2>
			<h2>{characterList[characterListIndex]['kunyomi']}</h2>
			<h2>{characterList[characterListIndex]['meaning']}</h2>
			<Canvas getWriting={submitWriting} />
		</div>
	)
}

export default Quiz;