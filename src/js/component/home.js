import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="timer text-center mt-5 d-flex">
			<div className="num1">{props.char1}</div>
			<div className="num2">{props.char2}</div>
			<div className="num3">{props.char3}</div>
			<div className="num4">{props.char4}</div>
			<div className="num5">{props.char5}</div>
			<div className="num6">{props.char6}</div>
		</div>
	);
}
Home.propTypes = {
	char1: PropTypes.string,
	char2: PropTypes.string,
	char3: PropTypes.string,
	char4: PropTypes.string,
	char5: PropTypes.string,
	char6: PropTypes.string
};
