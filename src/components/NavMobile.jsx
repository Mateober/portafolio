import React from 'react';

const NavMobile = (translations) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            document.querySelector('.navbar-mobile-container').classList.remove('navbar-open');
            document.querySelector('.navbar-mobile').classList.remove('navbar-open2');
            document.body.classList.remove('no-scroll');
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

export default NavMobile;
