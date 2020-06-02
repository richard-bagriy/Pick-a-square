import React from 'react'
import { WinnerType } from '../store'

type Props = {
    history: Array<WinnerType>
}

const History:React.FC<Props> = ({ history }) => (
    <div className="history">
        <h2 className="history__header">Leader Board</h2>
        { history.map(({ name, time }) => <div className="history__item">
            <div>{ name }</div>
            <div>{ time }</div>
        </div>) }
    </div>
)

export default History