import React, { useReducer } from 'react';
import { reducer, initialState, GameContext } from '../store';
import Logo from './Logo';
import GameOptions from './GameOptions';
import Engine from './Engine';
import Winner from './Winner';
import GameDesk from './GameDesk';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <div className="container">
        <Logo />
        <GameContext.Provider value={{ state, dispatch }}>
            <GameOptions />
            { state.end && <Winner name={state.winner.name} /> }
            { state.start && <Engine /> }
            { state.board.length > 0 &&  <GameDesk />}
        </GameContext.Provider>
    </div>
}

export default App;
