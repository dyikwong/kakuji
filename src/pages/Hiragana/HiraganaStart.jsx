import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function HiraganaStart() {
	const [timeLimit, setTimeLimit] = useState(1);

	// options for color and line thickness? (show preview)

	const nav = useNavigate();

	// Slider for time limit, default at 1 min
	function handleTimeChange(e) {
		setTimeLimit(e.target.value);
		if (e.target.value == 0.5) {
			document.getElementById('slider-value').innerHTML = '30 seconds';
		} else if (e.target.value == 1) {
			document.getElementById('slider-value').innerHTML = '1 minute';
		} else {
			document.getElementById('slider-value').innerHTML = e.target.value + ' minutes';
		}
	}

	// Reset button to reset all options to default
	function resetOptions() {
		setTimeLimit(1);
		document.getElementById('slider-value').innerHTML = '1 minute';
		document.getElementById('time-length').value = 1;
	}

	function moveToQuiz() {
		nav('/kakuji/hiragana/quiz', { state: { time: timeLimit } });
	}

	const [canvasSize, setCanvasSize] = useState(1); // pass this variable to child

	/* <canvas style={{
					width: 300, height: 300, border: 5
				}}>
					canvas here with the specified size based on value from radio button
				</canvas>

	*/

	/* <h3>Canvas Size:</h3>
				<div>
					<div className="form-check">
						<label >
							<input className="form-check-input" type="radio" name="flexRadioDefault" id="canvasSmall" />
							Small
						</label>
					</div>
					<div className="form-check">
						<label>
							<input className="form-check-input" type="radio" name="flexRadioDefault" id="canvasMedium" />
							Medium
						</label>
					</div>
					<div className="form-check">
						<label>
							<input className="form-check-input" type="radio" name="flexRadioDefault" id="canvasLarge" />
							Large
						</label>
					</div>
				</div>
				*/

	return (
		<div className="start-container">
			<div className="inside-start-container">
				<h1>Kanji Options</h1>
				<div>
					<h3>Select JLPT Levels:</h3>
					{checkBoxes.map((box) => (
						<div key={box.title} className="level-checkbox">
							<label>
								<input
									type="checkbox"
									checked={box.checked}
									onChange={() => handleCheckboxChange(box.title)}
								/>
								{box.title}
							</label>
						</div>
					))}
				</div>
				<br />
				<h3>Time:</h3>
				<div id="options-buttons">
					<label htmlFor="time-length" className="form-label" id="slider-value">1 minute</label>
					<input type="range" className="form-range" defaultValue={timeLimit} min="0.5" max="5" step="0.5" id="time-length" onChange={handleTimeChange} />
				</div>
				<br />
				<br />
				<div className="options-buttons">
					<button type="button" className="btn btn-secondary" id="reset-button" onClick={resetOptions}>Reset</button>
					<button type="button" className="btn btn-primary" id="start-button" onClick={moveToQuiz} >Start</button>
				</div>

			</div>
		</div >
	);
}

export default HiraganaStart;