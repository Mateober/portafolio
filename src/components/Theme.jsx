import React, { useEffect, useState } from 'react';

export default function Theme() {
    const getInitialTheme = () => {
        if (typeof window === 'undefined') return false;
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [isDark, setIsDark] = useState(getInitialTheme);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            document.documentElement.classList.toggle('theme-dark', newTheme);
            document.documentElement.classList.toggle('theme-light', !newTheme);
            return newTheme;
        });
    };

    return (
        <div className="icon-navbar-container" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </div>
    );
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"></path>
        </g>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9"></path>
    </svg>
);
