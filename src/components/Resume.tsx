import React, { useState } from 'react';

const Resume = (translations) => {
    const pdfUrl = '/CV-Mateo-Bertello.pdf'; // Asegurate de que el PDF esté en la carpeta `public/docs`
    const [open, setOpen] = useState(false);

    return (
        <div className="resume-container">
            <div className="btn-resume" onClick={() => setOpen(!open)}>
                <p className="principal">Resume</p>
                <svg className="arrow-language" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 9l6 6l6-6"></path>
                </svg>
            </div>

            <div className={`resumes ${open ? 'open' : ''}`}>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="resume">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" />
                            <circle cx="12" cy="12" r="3" />
                        </g>
                    </svg>
                    <p>View Resume</p>
                </a>
                <a href={pdfUrl} download className="resume">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3" />
                    </svg>
                    <p>Download Resume</p>
                </a>
            </div>
        </div>
    );
};

export default Resume;
