function Card({ hog, handleTileClick }) {
    return (
        <div key={hog.name} className="pigTile" onClick={handleTileClick}>
            <h1 className="name">{hog.name}</h1>
            <img className="hog minPigTile" src={hog.image} alt="hog" />
            <h2 className="specialty hoggyText">Specialty: {hog.specialty}</h2>
            <h2 className="weight hoggyText">Weight: {hog.weight}</h2>
            <h2 className="greased hoggyText">Greased: {hog.greased ? "Yes" : "No"}</h2>
            <h2 className="medal hoggyText">Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
        </div>
    )
}

export default Card;