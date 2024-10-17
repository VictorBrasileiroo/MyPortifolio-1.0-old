import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import maozinha from '@/assets/img/maozinha.svg';
import linkedinIcon1 from '@/assets/img/icons8-linkedin 1.svg';
import linkedinIcon2 from '@/assets/img/icons8-linkedin 2.svg';
import linkedinIcon3 from '@/assets/img/icons8-linkedin 3.svg';
import githubIcon from '@/assets/img/icons8-github 1.svg';

const WordChanger = ({ word, speed = 50 }) => {
    const [displayedWord, setDisplayedWord] = useState('');

    useEffect(() => {
        setDisplayedWord('');
        let index = -1;
        const intervalId = setInterval(() => {
            index++;
            if (index < word.length) {
                setDisplayedWord((prev) => prev + word[index]);
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [word, speed]);

    return <span>{displayedWord}</span>;
};

export function Hero() {
    const words = ['web', 'react'];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (wordIndex + 1) % words.length;
            setCurrentWord(words[nextIndex]);
            setWordIndex(nextIndex);
        }, 8000);

        return () => clearInterval(intervalId);
    }, [wordIndex, words]);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="hero-container">
            <div className="container-text">
                <div className="row1">
                    <h2>hi <span><img src={maozinha} alt="maozinha" /></span> i'm victor!</h2>
                </div>
                <div className="row2">
                    <h1>
                        <WordChanger word={currentWord} speed={300} />
                    </h1>
                    <div className="container-links">
                        <a href="https://www.linkedin.com/in/victorbrasileirooo/"><img src={linkedinIcon1} alt="LinkedIn" /></a>
                        <a href="https://www.instagram.com/victorbrasileiroo/"><img src={linkedinIcon3} alt="Instagram" /></a>
                        <a href="#"><img src={linkedinIcon2} alt="LinkedIn" /></a>
                        <a href="https://github.com/VictorBrasileiroo"><img src={githubIcon} alt="GitHub" /></a>
                    </div>
                </div>
                <div className="row3">
                    <h1>developer</h1>
                </div>
                <div className="row4">
                    <p>Desenvolvedor web que cria <span>soluções</span> digitais, com foco em <span>inovação, desempenho e experiência de usuário</span>.</p>
                </div>
            </div>
            <div className="container-card">
                <div className="card"></div>
            </div>
        </section>
    );
}
