import React from 'react'
import Button from './Button'

function Header({onAdd, showAdd}) {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} onClick = {onAdd} text={showAdd ? 'Close' : 'Add'}/>

        </header>
    )
}

export default Header
