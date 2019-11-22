import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
	return (
		<div className="container">
			<div className="main-counter">
				<div className="firstDigit">{props.sthDigit} </div>
				<div className="firstDigit">{props.fifDigit}</div>
				<div className="firstDigit">{props.fthDigit}</div>
				<div className="firstDigit">{props.trdDigit}</div>
				<div className="firstDigit">{props.sndDigit}</div>
				<div className="firstDigit">{props.fstDigit}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	fstDigit: PropTypes.number,
	sndDigit: PropTypes.number,
	trdDigit: PropTypes.number,
	fthDigit: PropTypes.number,
	fifDigit: PropTypes.number,
	sthDigit: PropTypes.number
};
export default Counter;
