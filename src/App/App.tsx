import React, { useState } from 'react';
import './App.css';
import Button from '../Button/Button'
import Display from '../Display/Display'

interface Joke {
  id: string
  joke: string
  status: number
}
const App = () => {
  // const [ joke, setJoke ] = useState<Joke>()
  const [ joke, setJoke ] = useState<Joke>()

  const getNewJoke = async (): Promise<void> => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        accept: 'application/json'
      }
    })
    const data = await response.json()
    setJoke(data)
    console.log(typeof data)
  }
  
  const image = 'dad2.png'

  return (
    <div className="App">
      <h1>Dad Jokes!</h1>
      <Display currentJoke={joke}/>
      <img src={image} alt='cartoon dad'/>
      <Button getNewJoke={getNewJoke}/>
    </div>
  );
}

export default App;
