import React, { useState } from 'react';

const Resume = (translations) => {
    const pdfUrl = '/CV-Mateo-Bertello.pdf'; // Asegurate de que el PDF esté en la carpeta `public/docs`
    const [open, setOpen] = useState(false);

    return (
        <div className="resume-container">
            <div className="btn-resume" onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                    <g fill="none">
                        <path fill="#fff" d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" />
                        <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
                            clip-rule="evenodd"
                        />
                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.1v4.7h4.7" stroke-width="1" />
                        <path fill="#fff" d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133" />
                        <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z"
                            clip-rule="evenodd"
                        />
                    </g>
                </svg>
                <p className="principal">{translations?.navbar?.cv}</p>
                <svg className="arrow-language" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 9l6 6l6-6"></path>
                </svg>
            </div>

            <div className={`resumes ${open ? 'open' : ''}`}>
                <a href={translations?.navbar?.cvUrl} target="_blank" rel="noopener noreferrer" className="resume">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" />
                            <circle cx="12" cy="12" r="3" />
                        </g>
                    </svg>
                    <p>{translations?.navbar?.cvView}</p>
                </a>
                <a href={translations?.navbar?.cvUrl} download className="resume">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3" />
                    </svg>
                    <p>{translations?.navbar?.cvDownload}</p>
                </a>
            </div>
        </div>
    );
};

export default Resume;
