import React, { useState, useEffect } from "react";


const Languages = (translations) => {
    const [currentLanguage, setCurrentLanguage] = useState("es");
    const [open, setOpen] = useState(false);
    useEffect(() => {
        console.log("hola")
        if (typeof window !== "undefined") {
            setCurrentLanguage(window.location.pathname.startsWith("/en") ? "en" : "es");
        }
    }, []);

    const onClickLanguage = (lang) => {
        if (typeof window !== "undefined") {
            const newPath = lang === "es" ? "/" : "/en";
            window.location.pathname = newPath;
        }
    };

    return (
        <div className="idioma-container">
            <div className="btn-language" onClick={() => setOpen(!open)}>
                <p className="principal">{translations?.navbar?.idioma}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 9l6 6l6-6"></path>
                </svg>
            </div>

            <div className={`idiomas ${open ? "open" : ""}`}>
                <div className="idioma" onClick={() => onClickLanguage("es")}>
                    <p>Español</p>
                    {currentLanguage === "es" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path>
                        </svg>
                    )}
                </div>
                <div className="idioma" onClick={() => onClickLanguage("en")}>
                    <p>English</p>
                    {currentLanguage === "en" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path>
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Languages;
