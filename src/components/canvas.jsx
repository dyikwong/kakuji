import { useEffect, useRef } from 'react'
import React, { useState } from 'react';

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
	function handleGetWWriting(canvas) {
		props.getWriting(1);
	}

	// Handle 
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
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
		border: '2px solid black',
		width: '300',
		height: '200'
	}

	return (
		<div>
			<canvas style={styling} ref={canvasRef} />
			<br />
			<button onClick={clearCanvas} class="btn btn-danger"> Clear</button>
			<button onClick={handleGetWWriting} class="btn btn-success">Submit</button>
		</div>
	);
}

export default Canvas;