import React from 'react'
import Quiz from './components/Quiz'
import { useLocation } from 'react-router-dom';

function Katakana() {
	const location = useLocation();
	const { time, checked } = location.state || {};
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Katakana</h1>
			<Quiz time={time} content={checked} />
		</div>
	);
}

export default Katakana;