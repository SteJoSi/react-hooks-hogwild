import React, { useState } from "react";
import "../index.css";
import Card from "./Card";

function Tiles({ hogs }) {
    const [hogDetails, showHogDetails] = useState(false)
    const [greasedHogs, showGreasedHogs] = useState(false)

    let filteredHogs = hogs.filter(hog => {
        if (greasedHogs === false) return true
        if (hogs.greased === true) return hog
    })

    let allHogs = filteredHogs

//info for handleClick()
if (hogDetails && hogs && hogs.map) {
    allHogs = filteredHogs.map(hog => {
        return <Card hog={hog} handleTileClick={handleTileClick}/>
    });
} else if (hogs && hogs.map) {
    allHogs = filteredHogs.map((hog) => (
        <div key={hog.name} className="pigTile" onClick={handleTileClick}>
            <h1 className="name">{hog.name}</h1>
            <img className="hog minPigTile" src={hog.image} alt="hog" />
        </div >
    ))
}

function handleTileClick() {
    showHogDetails(!hogDetails)
}

function handleFilteredHogs() {
    showGreasedHogs(!greasedHogs)
}




// const filteredHogs = hogs.filter((hog) => hogs.greased === true); 
// showFilteredHogs(filterHogs);
// function handleFilteredHogs() {
//     const greasedHogs = hogs.filter((hog) => {
//         if(hog.greased !== true) {
//             return {
//                 allHogs
//             }; else {
//                 return allHogs
//             }
//         }
//     })
//     showFilteredHogs(greasedHogs)
// }


console.log('hogs', hogs)

return (
    <div className="hogTiles ui grid container">
        <button onClick={handleFilteredHogs}>Filter for Greased Hogs</button>
        <br />
        <br />
        <button>Hogs by Name</button>
        <br />
        <button>Hogs by Weight</button>
        <br />
       {allHogs}
    </div>
);
}


export default Tiles;