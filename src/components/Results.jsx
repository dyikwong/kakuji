import { useLocation } from "react-router-dom";

function Results(props) {
	const location = useLocation();
	const { submittedWriting, usedCharacters } = location.state || {};

	// Map over the submitted writings and display them in a table with the corresponding character information
	var submittedWritingList = submittedWriting.map((writing, index) => (
		<>
			<tbody key={index}>
				<tr>
					<td><img src={writing} alt={`Submitted writing ${index}`} /></td>
					<td>{usedCharacters[index].level}</td>
					<td>{usedCharacters[index].character}</td>
					<td>{usedCharacters[index].onyomi}</td>
					<td>{usedCharacters[index].kunyomi}</td>
					<td>{usedCharacters[index].meaning}</td>
				</tr>
			</tbody>
		</>
	));

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Results</h1>
			<table>
				<tbody>
					<tr>
						<th>Submitted</th>
						<th>Level</th>
						<th>Character</th>
						<th>Onyomi</th>
						<th>Kunyomi</th>
						<th>Meaning</th>
					</tr>
				</tbody>
				{submittedWritingList}
			</table>
		</div>
	);
}

export default Results;