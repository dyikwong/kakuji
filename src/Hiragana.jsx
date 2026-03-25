import React from 'react'
import AppNavbar from './components/AppNavbar'
import Quiz from './components/Quiz'
import { useLocation } from 'react-router-dom';

function Hiragana() {
	const location = useLocation();
	const { time, checked } = location.state || {};
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Hiragana</h1>
			<Quiz time={time} content={checked} />
		</div>
	);
}

export default Hiragana;