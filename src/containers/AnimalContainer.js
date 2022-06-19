import React, { useState, useEffect } from "react";
import AnimalSelect from '../components/AnimalSelect';
import AnimalDetail from '../components/AnimalDetail';
import Header from '../components/Header';

const AnimalContainer = () => {

    const [animal, setAnimal] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState('');

    useEffect(() => {
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
            .then(res => res.json())
            .then(data => setAnimal(data))
    }, []);

    const onAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    }



    return (
        <div className="main">
            <title className="header">
                <Header />
                {/* <button >Refresh Animal list</button> */}
            </title>
            <AnimalSelect className="list" allAnimals={animal} onAnimalClick={onAnimalClick} />
            {selectedAnimal ? <AnimalDetail animal={selectedAnimal} /> : null}
        </div>
    )

}





export default AnimalContainer;












