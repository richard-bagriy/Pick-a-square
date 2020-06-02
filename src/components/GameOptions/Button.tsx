import React, { useState, useContext, useEffect } from 'react'
import { GameContext, setGameStart, setGameEnd, setGameBoard } from '../../store'

const Button: React.FC = () => {
    const { state: { userName, setting, end, start } , dispatch } = useContext(GameContext)
    const [text, setText] = useState('Play')
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {

        if (userName.length > 1 && Object.keys(setting).length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

        if (end) {
            setText('Play again')
        } else {
            setText('Play')
        }
        
        start && setDisabled(true)

    }, [userName, setting, start, end])

    const handleClick = () => {
        dispatch(setGameStart(true))
        dispatch(setGameEnd(false))

        if (setting.field) {
            dispatch(setGameBoard(setting.field))
        }
    }
    
    return <button disabled={disabled} onClick={handleClick} className={`button ${disabled ? 'danger' : 'success'} `}>{ text }</button>
}

export default Button