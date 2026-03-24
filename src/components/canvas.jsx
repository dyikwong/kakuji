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
		// Set size of canvas and get its context
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		canvas.width = 400;
		canvas.height = 400;
		// Clear anything on the canvas if there is anything
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';
		let isDrawing = false;

		// Draw function that creates lines
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

		canvas.addEventListener('touchstart', (e) => {
			e.preventDefault();
			isDrawing = true;
			ctx.beginPath();
		})

		canvas.addEventListener('touchmove', (e) => {
			e.preventDefault();
			draw();
		})

		canvas.addEventListener('touchend', (e) => {
			e.preventDefault();
			isDrawing = false;
		});
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