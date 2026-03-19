import { useEffect, useState } from 'react';

function Timer(props) {
	const [timeRemaining, updateTimeRemaining] = useState(props.time * 60);

	useEffect(() => {
		if (timeRemaining == 0)
			return;

		const intervalID = setInterval(() => {
			updateTimeRemaining(timeRemaining - 1);
		}, 1000);

		//return () => clearInterval(intervalID);
		clearInterval(intervalID);
	}, [timeRemaining]);

	return (
		<h1 style={{ float: "right" }}> {Math.floor(timeRemaining / 60)}: {timeRemaining - ((Math.floor(timeRemaining / 60) * 60))}</h1 >
	)

}

export default Timer;