import React, { useContext } from 'react'
import { GameContext, setGameSetting, setGameBoard } from '../../store'

const Select: React.FC = () => {
    const { state: { settings, start, board } , dispatch } = useContext(GameContext)
    
    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> ) => {
        const { currentTarget: { value } } = e
        const setting = settings[Number(value)]
        
        dispatch(setGameSetting(setting))
        dispatch(setGameBoard(setting.field))
    }
    
    return <select className="select" disabled={start} onChange={handleChange}>
        <option disabled value="-" selected >Select game mode</option>
        { settings.map(({ name, id }) => (
            <option value={id} key={id}>{name}</option>
        ))}
    </select>
}

export default Select