import React, { useContext } from 'react'
import { GameContext } from '../store'
import Board from './Board'
import History from './History'

const GameDesk: React.FC = () => {
    const { state: { board, history } } = useContext(GameContext)

    return <div className="game-desk">
        <Board board={board} />
        { history.length > 0 && <History history={history} /> }
    </div>
}

export default GameDesk