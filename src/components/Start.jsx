import React from "react";
import { useState } from "react";

function Start() {
	// 5 checkboxes for each JLPT level (input validation if empty)
	// Slider for amount of time 

	// options for color and line thickness? (show preview)


	return (
		<div>
			<div>
				<input className="form-check-input" type="checkbox" value="" id="n1-check" />
				<label className="form-check-label" htmlFor="n1-check">
					N1
				</label>
				<br />
				<input className="form-check-input" type="checkbox" value="" id="n2-check" />
				<label className="form-check-label" htmlFor="n2-check">
					N2
				</label>
				<br />
				<input className="form-check-input" type="checkbox" value="" id="n3-check" />
				<label className="form-check-label" htmlFor="n3-check">
					N3
				</label>
				<br />
				<input className="form-check-input" type="checkbox" value="" id="n4-check" />
				<label className="form-check-label" htmlFor="n4-check">
					N4
				</label>
				<br />
				<input className="form-check-input" type="checkbox" value="" id="n5-check" />
				<label className="form-check-label" htmlFor="n5-check">
					N5
				</label>
				<br />
			</div>
			<button type="button" className="btn btn-primary" id="clear-button">Clear</button>
			<button type="button" className="btn btn-primary" id="start-button">Start</button>
			<br />

			<div id="options-buttons" style={{ display: "inline" }}>
				<label htmlFor="time-length" className="form-label">Length</label>
				<label htmlFor="time-length" className="form-label" id="slider-value">1</label>
				<input type="range" className="form-range" defaultValue="1" min="0.5" max="5" step="0.5" id="time-length" />
			</div>

		</div >
	);
}

export default Start;