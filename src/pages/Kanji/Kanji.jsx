import React from 'react'
import AppNavbar from '../../components/AppNavbar'
import KanjiQuiz from './KanjiQuiz'
import { useLocation } from 'react-router-dom';

function Kanji() {
	const location = useLocation();
	const { time, checked } = location.state || {};
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Kanji</h1>
			<KanjiQuiz time={time} content={checked} />
		</div>
	);
}

export default Kanji;