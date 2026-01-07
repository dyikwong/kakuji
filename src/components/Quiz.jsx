import React, { useState } from 'react';
import Canvas from './Canvas';
import { Link, useLocation } from 'react-router-dom';

function Quiz(props) {
	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [characterListIndex, setCharacterListIndex] = useState(0); // track which character/word


	var characterList = {
		1: {
			'kanji': '日',
			'onyomi': 'ニチ, ジツ',
			'kunyomi': 'ひ, -び, -か',
			'meaning': 'day, sun, Japan, counter for days'
		},
		2: {
			'kanji': '一',
			'onyomi': 'イチ',
			'kunyomi': 'ひと（つ）',
			'meaning': 'one'
		},
	};

	const location = useLocation();
	const time = location.state.time;

	const index = Math.floor(Math.random() * Object.keys(characterList).length);

	const submitWriting = (newWriting) => {
		//setIsSubmit(!isSubmit);
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		//setCharacterListIndex(characterListIndex + 1);
		console.log(submittedWriting);
	};

	return (
		<div>
			<Link to="/..">
				<button>Quit</button>
			</Link>
			<h2>{characterList[index]['onyomi']}</h2>
			<h2>{characterList[index]['kunyomi']}</h2>
			<h2>{characterList[index]['meaning']}</h2>
			<Canvas getWriting={submitWriting} />
		</div>
	)
}

export default Quiz;