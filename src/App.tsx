import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
	const [name, setName] = useState("sina");

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{name}</p>
				<Button variant="outlined" color="info" onClick={(event) => setName("haw")}>
					set to int
				</Button>
			</header>
		</div>
	);
}

export default App;
