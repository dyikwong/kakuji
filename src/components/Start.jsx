import React from "react";
import { useState } from "react";

function Start() {
	// 5 checkboxes for each JLPT level (input validation if empty)
	// Slider for amount of time 

	// options for color and line thickness? (show preview)


	return (
		<div>
			<div>
				<input class="form-check-input" type="checkbox" value="" id="n1-check">
					<label class="form-check-label" for="n1-check">
						N1
					</label>
				</input>
				<input class="form-check-input" type="checkbox" value="" id="n2-check">
					<label class="form-check-label" for="n2-check">
						N2
					</label>
				</input>
				<input class="form-check-input" type="checkbox" value="" id="n3-check">
					<label class="form-check-label" for="n3-check">
						N3
					</label>
				</input>
				<input class="form-check-input" type="checkbox" value="" id="n4-check">
					<label class="form-check-label" for="n4-check">
						N4
					</label>
				</input>
				<input class="form-check-input" type="checkbox" value="" id="n5-check">
					<label class="form-check-label" for="n5-check">
						N5
					</label>
				</input>
			</div>



		</div>
	);
}

export default Start;