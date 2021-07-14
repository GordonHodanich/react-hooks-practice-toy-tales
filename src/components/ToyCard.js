import React from "react";

function ToyCard({ toy, onDonate, onLike }) {

  const handleDonateClick = () => {
    onDonate(toy.id)
  }

  const handleLike = () => {
    const updateObj = {
      likes: toy.likes + 1
    }
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateObj),
    })
    .then(resp => resp.json())
    .then(onLike)
  }

    
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
