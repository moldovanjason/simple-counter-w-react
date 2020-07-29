import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5">
			<div>{props.char1} </div>
			<div>{props.char2}</div>
			<div>{props.char3}</div>
			<div>{props.char4}</div>
			<div>{props.char5}</div>
			<div>{props.char6}</div>
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
