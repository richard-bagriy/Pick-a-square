import React from 'react'
import { setScorePlayer, setCol, GameContext } from '../../store'

type Props = {
    value: number
    x: number
    y: number
}

const Col: React.FC<Props> =  ({ value, x, y }) => {

    const { state:{ start }, dispatch } = React.useContext(GameContext)

    const handleClick = () => {
        if (value === 1 && start) {
            dispatch(setScorePlayer())
            dispatch(setCol({ x ,y, value: 2 }))
        }
    }

    const createColor = (value: number) => {
        switch(value) {
            case 1: 
                return 'blue'
            case 2: 
                return 'green'
            case 3: 
                return 'red'
            default: return ''
        }
    }

    const color = createColor(value)

    return <div className={`board__col ${color}`} onClick={handleClick}></div>
}

export default Col