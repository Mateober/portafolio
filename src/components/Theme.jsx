import React, { useState, useEffect } from 'react';

const Theme = (translations) => {
    const [currentTheme, setCurrentTheme] = useState('es');
    const [open, setOpen] = useState(false);
    
    useEffect(() => {

    }, []);

    const onClickTheme = (theme) => {

    };

    return (
        <div class="icon-navbar-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"></path>
                </g>
            </svg>
        </div>
    );
};

export default Theme;
