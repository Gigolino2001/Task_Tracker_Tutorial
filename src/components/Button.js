import React from 'react'

function Button({text, color, onClick}) {
    return (
    <button className='btn' onClick = {onClick} style={{backgroundColor : color}}> {text} </button>
    )
}

export default Button
