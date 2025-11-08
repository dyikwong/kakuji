import { useEffect, useRef } from 'react'


function Canvas(props) {

	const canvasRef = useRef(null)
	const draw = (e) => {
		if (!isDrawing) {
			return;
		}

		ctx.lineWidth = lineWidth;
		ctx.lineCap = 'round';
		ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
		ctx.stroke();
	}




	const styling = {
		border: '2px solid black'
	}

	return (
		<div>
			<canvas style={styling} ref={canvasRef} {...props} />
		</div>
	);
}

export default Canvas;