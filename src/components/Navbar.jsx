import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {


	//Use if using NavLink for custom styling
	function NavLinkStyles(isActive) {

	}

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">kakuji 書く字</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/hiragana" style={NavLinkStyles} className="nav-link">Hiragana/ひらがな</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/katakana" style={NavLinkStyles} className="nav-link">Katakana/カタカナ</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/kanji" style={NavLinkStyles} className="nav-link">Kanji/漢字</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
}

export default Navbar;
