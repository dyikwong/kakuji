import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Start.css';

function Start() {
	const [timeLimit, setTimeLimit] = useState(1);
	const [checkBoxes, setCheckBoxes] = useState([
		{ title: 'N1', checked: false },
		{ title: 'N2', checked: false },
		{ title: 'N3', checked: false },
		{ title: 'N4', checked: false },
		{ title: 'N5', checked: false },
	]);
	// 5 checkboxes for each JLPT level (input validation if empty)
	// Slider for amount of time 

	// options for color and line thickness? (show preview)

	const nav = useNavigate();

	function handleTimeChange(e) {
		setTimeLimit(e.target.value);
	}

	function clearOptions() {
		setCheckBoxes(checkBoxes.map((item) => ({ ...item, checked: false })));
	}

	function handleCheckboxChange(title) {
		setCheckBoxes(
			checkBoxes.map((item) =>
				item.title === title ? { ...item, checked: !item.checked } : item
			)
		);
	}

	function moveToQuiz() {
		nav('/kanji', { state: { time: timeLimit, content: checkBoxes } });
	}

	const [canvasSize, setCanvasSize] = useState(1); // pass this variable to child


	return (
		<div className="start-container">
			<div className="inside-start-container">
				<h1>Start</h1>
				<div>
					{checkBoxes.map((box) => (
						<div key={box.title} class="level-checkbox">
							<input
								type="checkbox"
								checked={box.checked}
								onChange={() => handleCheckboxChange(box.title)}
							/>
							<label>{box.title}</label>
						</div>
					))}
				</div>
				<br />
				<div id="options-buttons">
					<label htmlFor="time-length" className="form-label" id="slider-value">{timeLimit}</label>
					<input type="range" className="form-range" defaultValue={timeLimit} min="0.5" max="5" step="0.5" id="time-length" onChange={handleTimeChange} />
				</div>
				<br />
				<div>
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="canvasSmall" />
						<label class="form-check-label" for="canvasSmall">
							Small
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="canvasMedium" checked />
						<label class="form-check-label" for="canvasMedium">
							Medium
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="canvasLarge" checked />
						<label class="form-check-label" for="canvasLarge">
							Large
						</label>
					</div>
				</div><canvas style={{
					width: 300, height: 300, border: 5
				}}>
					canvas here with the specified size based on value from radio button
				</canvas><button>clear button underneath</button>
				<button type="button" className="btn btn-primary" id="clear-button" onClick={clearOptions}>Clear</button>
				<button type="button" className="btn btn-primary" id="start-button" onClick={moveToQuiz} >Start</button>
			</div>
		</div >
	);
}

export default Start;