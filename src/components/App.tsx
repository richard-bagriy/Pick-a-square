import React, { useReducer } from 'react';
import { reducer, initialState, GameContext } from '../store';
import Logo from './Logo';
import GameOptions from './GameOptions';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <div className="container">
        <Logo />
        <GameContext.Provider value={{ state, dispatch }}>
            <GameOptions />
        </GameContext.Provider>
    </div>
}

export default App;
