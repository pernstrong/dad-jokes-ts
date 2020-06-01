import React from 'react'
import './Button.css'

interface Props {
    getNewJoke: () => void
}

const Button = (props: Props) => {

    return (
        <button onClick={() => props.getNewJoke()}>Wanna hear a joke?</button>
    )
}

export default Button