import { useEffect, useState } from 'react';

function Timer() {
	const [timeRemaining, updateTimeRemaining] = useState(60);
	//let timer = setInterval(countdown, 1000);

	useEffect(() => {
		if (timeRemaining == 0)
			return;

		const intervalID = setInterval(() => {
			updateTimeRemaining(timeRemaining - 1);
		}, 1000);

		//return () => clearInterval(intervalID);
	}, [timeRemaining]);

	return (
		<h1>{timeRemaining}</h1>
	)

}

export default Timer;