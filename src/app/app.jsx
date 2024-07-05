import React from "react";
import { createRoot } from "react-dom/client";
import { SoleInk } from "../components/soleink";

const App = () => (
	<div>
		<h1>My React App</h1>
		<SoleInk initialValue="Hello, World!" />
	</div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
