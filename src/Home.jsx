import React from "react";
import AppNavbar from './components/AppNavbar';
import Kanji from './pages/Kanji/Kanji'
import Hiragana from './pages/Hiragana/Hiragana'
import Katakana from './pages/Katakana/Katakana'
import Results from './components/Results';
import Start from './components/Start';

function Home() {
	return (
		<div>
			<h1>Kakuji</h1>
			<p>Welcome!</p>
		</div>
	);
}

export default Home;