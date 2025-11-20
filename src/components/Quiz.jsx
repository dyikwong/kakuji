import React, { useState } from 'react';
import Canvas from './Canvas';

function Quiz(props) {
	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [characterListIndex, setCharacterListIndex] = useState(0); // track which character/word

	return (
		<div>
			<h2>ホク、きた</h2>
			<h2>north</h2>
			<Canvas />
		</div>
	)
}

export default Quiz;