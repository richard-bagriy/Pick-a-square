import React, { useContext, useEffect, useRef, useState } from 'react'
import { GameContext, setCol, setScorePc, setGameEnd, setGameStart, setWinner, addToHistory, clearScore } from '../store'
import { getRandomField } from '../utils'

const Engine: React.FC = () => {
    const { state: { board, setting, score, userName }, dispatch } = useContext(GameContext)
    const currentBoard = useRef<Array<Array<number>>>([])
    const [random, setRandom] = useState({})

    useEffect(() => {
        
        const id = setInterval(() => {
            const [x, y] = getRandomField(setting.field, currentBoard.current)
            setRandom({ x, y })
            dispatch(setCol({ x, y, value: 1 }))
        }, setting.delay)

        return () => clearInterval(id)
        
    }, [])

    useEffect(() => {
        board.forEach((row, y) => 
            row.forEach( (el, x) => {
                if (el === 1) {
                    dispatch(setCol({ x, y, value: 3 }))
                    dispatch(setScorePc())
                }
            })
        )
    }, [random])

    useEffect(() => {
        const winScore = Math.floor((setting.field * setting.field) / 2)
        const { pc, player } = score
        const date = new Date()
        const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        if (pc >= winScore) {
            const winner = { name: 'Computer', time: formattedDate }
            dispatchWinner(winner)
        }

        if (player >= winScore) {
            const winner = { name: userName, time: formattedDate }
            dispatchWinner(winner)
        }

        currentBoard.current = board

    }, [board])
    
    const dispatchWinner = (winner: { name: string, time: string }) => {
        dispatch(setGameEnd(true))
        dispatch(setGameStart(false));
        dispatch(setWinner(winner))
        dispatch(addToHistory(winner))
        dispatch(clearScore())
    }
    return <></>
}

export default Engine