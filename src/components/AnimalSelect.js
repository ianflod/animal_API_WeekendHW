import React from "react";
import AnimalItem from "./AnimalItem";

const AnimalSelect = ({ allAnimals, onAnimalClick }) => {

    const AnimalOptions = allAnimals.map((animal, index) => {
        return <AnimalItem animal={animal} key={index} onAnimalClick={onAnimalClick}/>
    })

    return (
        <>
            {AnimalOptions}
        </>
    )

}







export default AnimalSelect;