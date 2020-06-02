import React from 'react'
import Row from './Row'

type Props = {
    board: Array<Array<number>>
}

const Board: React.FC<Props> = ({ board }) => (
    <div className="board">
        { board.map((fields, y) => <Row fields={fields} y={y} key={y} /> ) }
    </div>
)

export default Board