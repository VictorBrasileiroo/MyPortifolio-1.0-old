import React, { useEffect } from "react";

export function Navbar() {
  useEffect(() => {
    const scrollHeader = () => {
      const nav = document.getElementById('header');

      if (window.scrollY >= 50) {
        nav.classList.add('active_header');
      } else {
        nav.classList.remove('active_header');
      }
    };

    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <>
      <header id="header" className="header_principal_container"> {/* Adicione o ID aqui */}
        <div className="container-logo">
          <img src="../../src/assets/img/LOGO VB 2.svg" alt="Logo" /> {/* Verifique o caminho da imagem */}
          <div>
            <span className="span">Victor</span>
            <h4>Brasileiro</h4>
          </div>
        </div>
        <nav className="container-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <div className="container-button">
            <button>Ligar</button>
          </div>
        </nav>
      </header>
    </>
  );
}
