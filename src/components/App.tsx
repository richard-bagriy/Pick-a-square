import React, { useReducer } from 'react';
import { reducer, initialState, } from '../store';
import Logo from './Logo';

export const GameContext = React.createContext({})

const App: React.FC = () => {

    const state = useReducer(reducer, initialState)

    return <div className="container">
        <Logo />
        <GameContext.Provider value={state}>

        </GameContext.Provider>
    </div>
}

export default App;
