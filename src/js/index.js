//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Counter } from "./component/counter.js";

//render your react application
let count = 0;

setInterval(() => {
	let a = Math.floor((count / 1) % 10);
	let b = Math.floor(count / 10) % 10;
	let c = Math.floor(count / 100) % 10;
	let d = Math.floor(count / 1000) % 10;
	let e = Math.floor(count / 10000) % 10;
	let f = Math.floor(count / 100000) % 10;
	count++;

	ReactDOM.render(
		<Counter
			fstDigit={a}
			sndDigit={b}
			trdDigit={c}
			fthDigit={d}
			fifDigit={e}
			sthDigit={f}
		/>,
		document.querySelector("#app")
	);
}, 100);
ReactDOM.render(<Counter />, document.querySelector("#app"));
