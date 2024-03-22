import { useState } from 'react';
import './header.css';

const Header = () => {
    const [active, setActive] = useState(false);

    const toggleNavbar = () => {
        setActive(!active);
    };

    return (
        <header>
            <nav>
                <h1 className='title'>Hayk`s Protfolio</h1>
                <ul className={active ? 'active' : ''}>
                    <a onClick={() => toggleNavbar(false)} href='#home'><li>Home</li></a>
                    <a onClick={() => toggleNavbar(false)} href='#aboutMe'><li>About me</li></a>
                    <a onClick={() => toggleNavbar(false)} href='#projects'><li>Projects</li></a>
                    <a onClick={() => toggleNavbar(false)} href='#contact'><li>Contact</li></a>
                    <a href='https://drive.google.com/file/d/1lmGr6j53CISV1HpFQJz_8D0UZpWg6JGQ/view?usp=drive_link'><button>Download CV</button></a>
                </ul>
                <i className='bx bx-menu menuIcon' onClick={toggleNavbar}></i>
            </nav>
        </header>
    );
};

export default Header;
