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



		</div>
	);
}

export default Start;