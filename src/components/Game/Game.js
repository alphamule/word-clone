import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Banner from '../Banner';
import TextInput from '../TextInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleInput = (newWord) => {
    setGuesses([...guesses, newWord]);
  }

  const getStatus = () => {
    let status = 'active';
    console.log({guesses})

    for (const guess of guesses) {
      console.log({ guess, answer })
      const checked = checkGuess(guess, answer);
      if (checked.filter(g => g.status === 'correct').length === 5) {
        status = 'happy';
      }
    }
    if (status !== 'won') {
      if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
        status = 'sad';
      }
    }

    return status;
  }

  const status = getStatus();
  let message = '';
  if (status === 'happy') {
    message = (
      <>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses.length} guesses</strong> 
      </>
    );
  } else if (status === 'sad') {
    message = (
      <>
        Sorry, the correct answer is <strong>{answer}</strong>
      </>
    );
  } else {
    // ok
  }

  return <>
    <TextInput handleInput={handleInput} disabled={status!=='active'} />
    <GuessResults guesses={guesses} answer={answer} />
    <Banner status={status}>{message}</Banner>
  </>;
}

export default Game;