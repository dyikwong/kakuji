import { useEffect, useRef } from 'react'


function Canvas(props) {
	const canvasRef = useRef(null)
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';
		let isDrawing = false;

		const draw = (e) => {
			if (!isDrawing) {
				return;
			}

			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
		}
		canvas.addEventListener('mousedown', (e) => {
			isDrawing = true;
			ctx.beginPath();
		})

		canvas.addEventListener('mouseup', (e) => {
			isDrawing = false;
			ctx.beginPath();
		})

		canvas.addEventListener('mousemove', draw);

		canvas.addEventListener('mouseleave', (e) => {
			isDrawing = false;
		})
	}, [])

	const styling = {
		border: '2px solid black',
		width: '300',
		height: '200'
	}

	return (
		<div>
			<canvas style={styling} ref={canvasRef} {...props} />
		</div>
	);
}

export default Canvas;