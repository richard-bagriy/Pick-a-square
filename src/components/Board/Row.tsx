import React from 'react'
import Col from './Col'

type Props = {
    fields: Array<number>
    y: number
}

const Row: React.FC<Props> = ({ fields, y }) =>  (
    <>{ fields.map((value, x) => <Col x={x} y={y} value={value} key={x} /> ) }</>
)

export default Row