import React from "react";
import AppNavbar from './components/AppNavbar';
import Kanji from './Kanji'
import Hiragana from './Hiragana'
import Katakana from './Katakana'
import Results from './components/Results';
import Start from './components/Start';

function Home() {
	return (
		<div>
			<AppNavbar />
			<h1>Kakuji</h1>
			<p>Welcome!</p>
		</div>
	);
}

export default Home;