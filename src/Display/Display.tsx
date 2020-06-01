import React from 'react'
import './Display.css'

interface Props {
    currentJoke: Joke | undefined
}

interface Joke {
    id: string
    joke: string
    status: number
}

const Display = (props: Props) => {

    return (
        <section className="display">
            {!props.currentJoke && <p className="intro-message">Hey there kiddo...would you like to hear a joke?</p>}
            {props.currentJoke && <p>{props.currentJoke.joke}</p>}
        </section>
    )
}

export default Display