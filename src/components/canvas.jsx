import { useEffect, useRef } from 'react'
import React, { useState } from 'react';

function Canvas(props) {
	const canvasRef = useRef(null);
	const [isSubmit, setIsSubmit] = useState(false);
	const [canvasCleared, setCanvasCleared] = useState(false);

	const clearCanvas = () => {
		setCanvasCleared(!canvasCleared);
	};

	const submitWriting = (newWriting) => {
		setIsSubmit(!isSubmit);
		setSubmittedWriting((submittedWriting) => [...submittedWriting, newWriting])
		setCharacterListIndex(characterListIndex + 1);
		console.log(newWriting);
	};

	function handleGetWWriting(canvas) {
		props.getCanvasWriting(1);
	}

	// Sends the current canvas writing to Quiz component; runs once
	if (props.submitState) {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		useEffect(() => {
			handleGetWWriting(1);
		});
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
			<button onClick={clearCanvas}> Clear</button>
			<button onClick={submitWriting}>Submit</button>
		</div>
	);
}

export default Canvas;