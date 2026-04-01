import { useEffect, useState } from 'react';

function Timer(props) {
	const [timeRemaining, updateTimeRemaining] = useState(props.time * 60);

	useEffect(() => {
		if (timeRemaining == 0)
			return;

		const intervalID = setInterval(() => {
			updateTimeRemaining(timeRemaining - 1);
		}, 1000);

		return () => clearInterval(intervalID);
	}, [timeRemaining]);

	let mins = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
	let secs = String(timeRemaining - ((Math.floor(timeRemaining / 60) * 60))).padStart(2, '0');

	return (
		<h1 style={{ float: "right" }}> {mins}:{secs}</h1 >
	)

}

export default Timer;