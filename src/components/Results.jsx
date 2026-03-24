import { useLocation } from "react-router-dom";

function Results(props) {
	const location = useLocation();
	const { submittedWriting, usedCharacters } = location.state || {};

	// <img src={submittedWriting[submittedWriting.length - 1]} alt="Submitted writing" />

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Results</h1>
		</div>
	);
}

export default Results;