import React from "react";

const AnimalItem = ({ animal, onAnimalClick }) => {

    const handleClick = function () {
        onAnimalClick(animal)
    }



    return (
        <ul>
            <l1 onClick={handleClick}>{animal.name}</l1>
        </ul>
    )

}




export default AnimalItem;