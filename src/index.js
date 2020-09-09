import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counterComponent";

const element = (
	<div>
		<Counter></Counter>
	</div>
);

ReactDOM.render(element, document.getElementById("root"), () => {
	console.log("hello");
});
