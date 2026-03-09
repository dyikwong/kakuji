import React from 'react'
import Quiz from './components/Quiz'
import { useLocation } from 'react-router-dom';

function Kanji() {
	const location = useLocation();
	const { time, checked } = location.state || {};
	console.log(time);
	console.log(checked);
	return (
		<div>
			<h1>Kanji</h1>
			<Quiz time={time} content={checked} />
		</div>
	);
}

export default Kanji;