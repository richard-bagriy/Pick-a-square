import React from 'react'
import Select from './Select'
import Input from './Input'
import Button from './Button'

const GameOptions: React.FC = () => (
    <div className="game-setting">
        <h2>- Game setting - </h2>
        <div className="flex justify-content-around">
            <Select />
            <Input />
            <Button />
        </div>
    </div>
)

export default GameOptions