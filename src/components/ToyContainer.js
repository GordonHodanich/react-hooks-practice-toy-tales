import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys, handleUpdateToy }) {

  const handleDonate = (id) => {
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      const newToyDonation = toys.filter((toy) => toy.id !== id)
      setToys(newToyDonation)
    })
  }

  

const toyContent = toys.map(toy => <ToyCard toy={toy} key={toy.id} onDonate={handleDonate} onLike={handleUpdateToy}/>)

  return (
    <div id="toy-collection">{toyContent}</div>
  );
}

export default ToyContainer;
