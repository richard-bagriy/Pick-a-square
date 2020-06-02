import React from 'react'
import Row from './Row'
import Col from './Col'

type Props = {
    board: Array<Array<number>>
}

const Board: React.FC<Props> = ({ board }) => (
    <div className="board" style={{ maxWidth: (board.length * 40) + 'px'  }}>
        { board.map((fields, y) => (<Row fields={fields} y={y} key={y} />)) }
    </div>
)

export default Board