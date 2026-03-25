import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AppNavbar() {

	return (
		<Navbar bg="dark" data-bs-theme="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/kakuji">kakuji 書く字</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/kakuji/hiragana">Hiragana/ひらがな</Nav.Link>
						<Nav.Link as={Link} to="/kakuji/katakana">Katakana/カタカナ</Nav.Link>
						<Nav.Link as={Link} to="/kakuji/kanji">Kanji/漢字</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>


	);
}

export default AppNavbar;
