import './App.css';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import React, {useState, useEffect} from 'react'
import { showNotification as show } from './helpers/helper';
import Footer from './components/Footer';
import axios from 'axios';


const API_URL = "http://localhost:3000/api/v1/cheese";

const words = [
  'american', 
  'asiago', 
  'blue', 
  'bocconcini', 
  'brie', 
  'burrata', 
  'camembert', 
  'cheddar', 
  'cheesecurds', 
  'colby', 
  'colbyjack', 
  'coldpack', 
  'cotija', 
  'cottagecheese', 
  'creamcheese', 
  'emmental', 
  'edam', 
  'farmerscheese', 
  'feta', 
  'freshmozzarella', 
  'gorgonzola', 
  'goat', 
  'gouda', 
  'gruyere', 
  'halloumi', 
  'havarti', 
  'jarlsberg', 
  'limburger', 
  'marscarpone', 
  'montereyjack', 
  'mozzarella', 
  'muenster', 
  'neufchatel', 
  'paneer', 
  'parmesan', 
  'pepperjack', 
  'provolone', 
  'ricotta', 
  'romano', 
  'string', 
  'swiss' 
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

function App() {
  // const [word, setCheese] = useState([])
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter])
          } else {
            show(setShowNotification)
          }
        }
      }
    }
      window.addEventListener('keydown', handleKeydown)
      return()=> window.removeEventListener('keydown', handleKeydown)
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    //Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }


  return (
    <>
    <Header/>
    <div className="game-container">
      <Figure wrongLetters={wrongLetters}/>
      <WrongLetters wrongLetters={wrongLetters}/>
      <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord
      } setPlayable={setPlayable} playAgain={playAgain} />

    </div>
    <div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord
      } setPlayable={setPlayable} playAgain={playAgain} />
      </div>
      <footer>
        <Footer/>
        <Notification showNotification={showNotification}/>
      </footer>
    </>
  );
}

export default App;
