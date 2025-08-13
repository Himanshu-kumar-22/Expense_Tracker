import { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';

const LandingLayout = ({ children, active, setActive }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Text color state
    const [mystyle, setMyStyle] = useState({ color: 'white' });
    const TextlightMode = () => {
        setMyStyle(mystyle.color === 'white'
            ? { color: '#032854' }
            : { color: 'white' });
    };

    // Button background state
    const [btnBackground, setbtnBackground] = useState({ backgroundColor: '#043978' });
    const Textbackground = () => {
        setbtnBackground(btnBackground.backgroundColor === '#043978'
            ? { backgroundColor: '#C0C7E2' }
            : { backgroundColor: '#043978' });
    };

    // Card color state
    const [cardColor, setCardColor] = useState({
        background: '#04356E',
        color: 'white'
    });
    const Cardbackground = () => {
        setCardColor(cardColor.background === '#04356E'
            ? { background: '#A2B5CE', color: '#1F3F5E' }
            : { background: '#04356E', color: 'white' });
    };

    // Button border state
    const [btnborder, setbtnborder] = useState({
        borderWidth: '1px',
        borderColor: 'white',
    });
    const btnborderColor = () => {
        setbtnborder(btnborder.borderColor === 'white'
            ? { borderColor: '#032854' }
            : { borderColor: 'white' });
    };

    // Navbar active tab styling
    const underlining = (name) => ({
        borderBottom: active === name ? '2px solid white' : '2px solid transparent',
        fontWeight: active === name ? '900' : '400',
        color: active === name ? '#92A7C1' : 'white',
        padding: '8px 16px',
        cursor: 'pointer',
    });

    const toggleMode = () => {
        setDarkMode(!darkMode);
        TextlightMode();
        Textbackground();
        btnborderColor();
        Cardbackground();
    };

    useEffect(() => {
        document.body.style.background = darkMode
            ? 'linear-gradient(to bottom, #9EB3CC 0%, #C2C8E4 100%)'
            : 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)';

        document.body.style.minHeight = '100vh';
        document.body.style.minWidth = '100vw';
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
    }, [darkMode]);

    return (
        <>
            <Navbar
                darkMode={darkMode}
                toggleMode={toggleMode}
                mystyle={mystyle}
                btnborder={btnborder}
                btnBackground={btnBackground}
                underlining={underlining}
                active={active}
                setActive={setActive}
                cardColor={cardColor}
            />
            {children({ cardColor, btnBackground, btnborder, mystyle })}
        </>
    );
};

export default LandingLayout;