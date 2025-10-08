import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav class="">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/kanji">Kanji</Link>
				</li>
			</ul>
		</nav>

	);
}

export default Navbar;
