import React, { useState } from "react";
import "../index.css";
import Card from "./Card";

function Tiles({ hogs }) {
    const [hogDetails, showHogDetails] = useState(false)
    const [greasedHogs, showGreasedHogs] = useState(false)
    const [weightSort, showWeightSort] = useState(false)
    const [nameSort, sortByName] = useState(false)

    function handleFilteredHogs() {
        showGreasedHogs(!greasedHogs)
    }

    let filteredHogs = hogs.filter(hog => {
        if (greasedHogs === false) return true // returns all the hogs 
        return hog.greased

    })

    let allHogs = filteredHogs
    console.log('Hogs', allHogs)

    function handleTileClick() {
        showHogDetails(!hogDetails)
    }

    //info for handleClick()
    if (hogDetails && hogs) {
        allHogs = filteredHogs.map(hog => {
            return <Card hog={hog} handleTileClick={handleTileClick} />
        });
    } else if (hogs) {
        allHogs = filteredHogs.map((hog) => (
            <div key={hog.name} className="pigTile" onClick={handleTileClick}>
                <h1 className="name">{hog.name}</h1>
                <img className="hog minPigTile" src={hog.image} alt="hog" />
            </div >
        ))
    }

    // sort by weight
    function sortHogsByWeight() {
        showWeightSort(!weightSort)
    }

    if (weightSort) {
        hogs.sort(function (a,b) {
            return a['weight'] - b['weight']
        })
    }

    //sort by name
    function sortHogsByName() {
        sortByName(!nameSort)
    }
       
    if (nameSort) {
        hogs.sort(function (a,b) {
            return a['name'].localeCompare(b['name'])
        })
    }

    return (
        <div className="hogTiles ui grid container">
            <button onClick={handleFilteredHogs}>Filter for Greased Hogs</button>
            <br />
            <br />
            <button onClick={sortHogsByName}>Sort by Name</button>
            {/* sort alphabetically  */}
            <br />
            <button onClick={sortHogsByWeight}>Sort by Weight</button>
            {/* least to greatest */}
            <br />
            {allHogs}
        </div>
    );
}


export default Tiles;