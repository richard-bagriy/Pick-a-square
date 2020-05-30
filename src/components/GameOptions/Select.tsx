import React, { useContext } from 'react'
import { GameContext, setGameSetting } from '../../store'

const Select: React.FC = () => {
    const { state: { settings, start } , dispatch } = useContext(GameContext)

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> ) => {
        const { currentTarget: { value } } = e
        dispatch(setGameSetting(settings[Number(value)]))
    }

    return <select className="select" disabled={start} onChange={handleChange}>
        <option disabled value="-" selected >Select game mode</option>
        { settings.map(({ name, id }) => (
            <option value={id} key={id}>{name}</option>
        ))}
    </select>
}

export default Select