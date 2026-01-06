import React, { useState } from 'react';
import Canvas from './Canvas';
import { Link, useLocation } from 'react-router-dom';

function Quiz(props) {
	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [characterListIndex, setCharacterListIndex] = useState(0); // track which character/word

	const location = useLocation();
	const time = location.state.time;

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
			<h1>北</h1>
			<h2>ホク、きた</h2>
			<h2>north</h2>
			<Canvas getWriting={submitWriting} />
		</div>
	)
}

export default Quiz;