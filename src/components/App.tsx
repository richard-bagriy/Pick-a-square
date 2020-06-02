import React, { useReducer } from 'react';
import { reducer, initialState, GameContext } from '../store';
import Logo from './Logo';
import GameOptions from './GameOptions';
import Board from './Board';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <div className="container">
        <Logo />
        <GameContext.Provider value={{ state, dispatch }}>
            <GameOptions />
            { state.board.length > 1 && <Board board={state.board} /> }
        </GameContext.Provider>
    </div>
}

export default App;
