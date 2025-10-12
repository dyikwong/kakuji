import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">kakuji</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/hiragana" className="nav-link">Hiragana</Link>
						</li>
						<li className="nav-item">
							<Link to="/katakana" className="nav-link">Katakana</Link>
						</li>
						<li className="nav-item">
							<Link to="/kanji" className="nav-link">Kanji</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
}

export default Navbar;
