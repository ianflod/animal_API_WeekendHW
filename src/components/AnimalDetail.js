import React from "react";

const AnimalDetail = ({ animal }) => {
    return (
        <div>
            <h2 id="animalName">{animal.name}</h2>
            <div className="info">
                <ul className="details">
                    <li><b>Type:</b>{" "}{animal.animal_type}</li>
                    <li><b>Geographical Dispersal:</b>{" "}{animal.geo_range}</li>
                    <li><b>Habitat:</b>{" "}{animal.habitat}</li>
                    <li><b>Lifespan:</b>{" "}{animal.lifespan}{" "}years</li>
                </ul>
                <img src={animal.image_link} alt={animal.name} width="300" />
            </div>
        </div>
    )
}



export default AnimalDetail;