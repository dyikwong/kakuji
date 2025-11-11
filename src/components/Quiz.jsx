import React, { useState } from 'react';
import Canvas from './Canvas';

function Quiz(props) {
	const [canvasCleared, setCanvasCleared] = useState(false);

	const clearCanvas = () => {
		setCanvasCleared(true)
	};

	return (
		<div>
			<h2>ホク、きた</h2>
			<h2>north</h2>
			<Canvas isCleared={canvasCleared} />
			<button onClick={clearCanvas}> Clear</button>
			<button >Submit</button>
		</div>
	)
}

export default Quiz;