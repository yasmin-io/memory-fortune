import React, { useState } from "react";
import "./App.css";

// Card Design Images from '../Public/images'
const cardImages = [
  { src: "/img/Cover.png" },
  { src: "/img/Death.png" },
  { src: "/img/The-Empress.png" },
  { src: "/img/The-Fool.png" },
  { src: "/img/The-Lovers.png" },
  { src: "/img/The-Moon.png" },
  { src: "/img/The-Star.png" },
  { src: "/img/The-Sun.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Duplicate card array (12 in total), sort method to shuffle cards and add a random id to each card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);

  return (
    <div className="App">
      <h1> Fortune Teller's Memory Game</h1>
      <button onClick={shuffleCards}> New Game</button>
    </div>
  );
}

export default App;
