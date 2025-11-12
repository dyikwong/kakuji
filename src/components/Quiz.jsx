import React, { useState } from 'react';
import Canvas from './Canvas';

function Quiz(props) {
	const [canvasCleared, setCanvasCleared] = useState(false);
	const [submittedWriting, setSubmittedWriting] = useState([]);
	const [characterListIndex, setCharacterListIndex] = useState(0); // track which character/word

	const clearCanvas = () => {
		setCanvasCleared(!canvasCleared);
	};

	const submitWriting = (newWriting) => {
		setSubmittedWriting((submittedWriting) => [...submittedWriting,])
		setCharacterListCounter(characterListIndex + 1);
	};

	return (
		<div>
			<h2>ホク、きた</h2>
			<h2>north</h2>
			<Canvas />
			<button onClick={clearCanvas}> Clear</button>
			<button onClick={submitWriting}>Submit</button>
		</div>
	)
}

export default Quiz;