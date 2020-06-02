import React from 'react'

type Props = {
    name: string
}

const Winner: React.FC<Props> = ({ name }) => (
    <div className="winner">
        Winner is: { name }
    </div>
)

export default Winner