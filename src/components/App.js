import React from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"	

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Tiles hogs={hogs}/>
		</div>
	);
}

export default App;


//Hierachy 
// App
//	|-Nav.js
//	|-Tiles.js (name/image)
//		|-Tiles Click Event