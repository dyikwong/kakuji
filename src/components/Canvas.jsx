import { useEffect, useRef } from 'react'
import React, { useState } from 'react';

import './Canvas.css';

function Canvas(props) {
	const canvasRef = useRef(null);
	const [canvasCleared, setCanvasCleared] = useState(false);

	const clearCanvas = () => {
		// setCanvasCleared(!canvasCleared);
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};


	// onClick function for Submit button
	function handleGetWWriting() {
		props.getWriting(canvasRef.current.toDataURL());
	}

	// Handle 
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		canvas.width = 400;
		canvas.height = 400;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';
		let isDrawing = false;

		const draw = (e) => {
			if (!isDrawing) {
				return;
			}

			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
		}
		canvas.addEventListener('mousedown', (e) => {
			isDrawing = true;
			ctx.beginPath();
		})

		canvas.addEventListener('mouseup', (e) => {
			isDrawing = false;
			ctx.beginPath();
		})

		canvas.addEventListener('mousemove', draw);

		canvas.addEventListener('mouseleave', (e) => {
			isDrawing = false;
		})
	})

	const styling = {
		border: '2px solid black'
	}

	return (
		<div>
			<canvas style={styling} ref={canvasRef} />
			<br />
			<div className="canvas-btns">
				<button onClick={clearCanvas} className="btn btn-danger" id='clear-button'> Clear</button>
				<button onClick={handleGetWWriting} className="btn btn-success" id='submit-button'>Submit</button>
			</div>
		</div>
	);
}

export default Canvas;