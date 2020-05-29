import React from 'react'
import logo from '../assets/svg/logo.svg';

const Logo: React.FC = () => (
    <h1 className="flex align-items-center justify-content-center logo-header h1">
        <img src={logo} className="logo" alt="logo" />
        Pick a square (Game)
    </h1>
)

export default Logo