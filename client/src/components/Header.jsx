import React from 'react';
import { ReactComponent as Logo } from '../assets/Logo/Logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <>
            <header className="header">
                <Logo />
            </header>
        </>
    )
}

export default Header;