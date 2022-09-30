import React,{ useEffect } from 'react'
import { checkWin } from '../helpers/helper';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    const { width, height } = useWindowSize()

    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'YOU FETA BELIEVE IT! YOU WON!!!';
        <Confetti width={width} height={height}/>
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = 'OH NO!!  YOU CUT THE CHEESE!!!' ;
        finalMessageRevealWord = `... the cheese was ${selectedWord}`;
        playable = false;
    }

    useEffect (() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
    <div className="popup">
      <h2>{finalMessage}</h2>
      <h4>{finalMessageRevealWord}</h4>
      <button onClick={playAgain}>Play Again</button>
    </div>
  </div>
  )
}

export default Popup