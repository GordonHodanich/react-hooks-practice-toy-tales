import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {

const toyContent = toys.map(toy => <ToyCard toy={toy}/>)

  return (
    <div id="toy-collection">{toyContent}</div>
  );
}

export default ToyContainer;
