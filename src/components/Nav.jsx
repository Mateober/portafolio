import React from 'react';

const Nav = (translations) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    return (
        <>
            <a onClick={() => scrollToSection('body')}>{translations?.navbar?.inicio}</a>
            <a onClick={() => scrollToSection('projects')}>{translations?.navbar?.proyectos}</a>
            <a onClick={() => scrollToSection('contact')}>{translations?.navbar?.contacto}</a>
        </>
    );
};

export default Nav;
