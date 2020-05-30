import React, { useContext } from 'react'
import { GameContext, setUserName } from '../../store'

const Input: React.FC = () => {
    const { state: { userName, start }, dispatch } = useContext(GameContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = e
        dispatch(setUserName(value))
    }

    return <input 
        type="text" 
        placeholder="Enter User name" 
        name="user-name" 
        className="input" 
        value={userName} 
        onChange={handleChange} 
        disabled={start}
    />
}

export default Input