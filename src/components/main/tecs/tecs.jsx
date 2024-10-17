import React, { useState } from 'react';
import jsIcon from '@/assets/img/icons8-javascript 1.svg';
import cssIcon from '@/assets/img/icons8-css 1.svg';
import htmlIcon from '@/assets/img/icons8-html 1.svg';
import sassIcon from '@/assets/img/icons8-atrevimento 1.svg';
import bootstrapIcon from '@/assets/img/icons8-bootstrap 1.svg';
import tailwindIcon from '@/assets/img/icons8-tailwind-css 1.svg';
import reactIcon from '@/assets/img/icons8-reagir 1.svg';
import githubIcon from '@/assets/img/icons8-github (1) 1.svg';
import figmaIcon from '@/assets/img/Group.svg';

export function Tecs() {
    const [text, setText] = useState("Sou um desenvolvedor web com experiência em JavaScript, HTML5 e CSS3, criando interfaces dinâmicas e responsivas. Utilizo JavaScript para interatividade, HTML5 para estruturar conteúdo semântico e CSS3 com técnicas modernas como Flexbox e Grid para designs atraentes. Também aplico Sass para otimizar o CSS e frameworks como Bootstrap e Tailwind CSS para acelerar o desenvolvimento. Com React, construo componentes reutilizáveis e eficientes, e uso GitHub para gerenciar projetos e colaborar. Minha proficiência em Figma permite transformar protótipos em interfaces funcionais de forma eficaz.");
    const [title, setTitle] = useState('conhecimentos');
    const [condition, setCondition] = useState(0);

    function mudarTexto(novoTexto, novoTitle) {
        setText(novoTexto);
        setTitle(novoTitle);
        setCondition(1);
    }

    return (
        <>
            <section className="container-tecs" id="skills">
                <div className="container">
                    <div className="text-area">
                        <h2>{title}</h2>
                        <div>
                            <p>{text}</p>
                            {!condition && <h5>Clique nas tecnologias e saiba mais sobre elas!</h5>}
                        </div>
                    </div>
                    <div className="grid-area">
                        <div className="row">
                            <div className="card-tecs" onClick={() => mudarTexto("JavaScript é uma linguagem de programação versátil e essencial para o desenvolvimento web. Utilizada tanto no front-end quanto no back-end, ela permite criar interfaces dinâmicas e interativas. Com JavaScript, é possível manipular o DOM, responder a eventos do usuário, e integrar APIs, proporcionando uma experiência de usuário fluida. Além disso, com frameworks como React e bibliotecas como Node.js, JavaScript se tornou uma tecnologia fundamental para a criação de aplicações modernas e escaláveis.", "JavaScript")}>
                                <img src={jsIcon} alt="JavaScript Icon" />
                            </div>
                            <div className="card-tecs" onClick={() => mudarTexto("CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas da web. Ela permite o controle da aparência visual de elementos HTML, definindo cores, layouts, tipografia e espaçamento. Com CSS, é possível criar desde designs simples até interfaces complexas e responsivas, adaptando-se a diferentes dispositivos e tamanhos de tela. Junto com técnicas como Flexbox, Grid, e pré-processadores como Sass, o CSS é essencial para criar experiências de usuário atraentes e funcionais na web.", "CSS")}>
                                <img src={cssIcon} alt="CSS Icon" />
                            </div>
                            <div className="card-tecs" onClick={() => mudarTexto("HTML (HyperText Markup Language) é a linguagem de marcação base para a construção de páginas web. Ele define a estrutura e o conteúdo de uma página, organizando elementos como texto, imagens, links e vídeos. HTML é essencial para a criação de qualquer website, funcionando como a base sobre a qual CSS e JavaScript aplicam estilos e funcionalidades. Com o HTML5, a linguagem ganhou novos elementos e APIs, tornando-se ainda mais poderosa para criar sites modernos e acessíveis.", "HTML")}>
                                <img src={htmlIcon} alt="HTML Icon" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="card-tecs" onClick={() => mudarTexto("Sass é um pré-processador de CSS que permite o uso de variáveis, aninhamentos e funções, tornando o código CSS mais organizado e eficiente. Ele facilita o desenvolvimento de estilos complexos e melhora a manutenção em projetos de grande escala.", "Sass")}>
                                <img src={sassIcon} alt="Sass Icon" />
                            </div>
                            <div className="card-tecs" onClick={() => mudarTexto("Bootstrap é um framework front-end que facilita a criação de layouts responsivos e móveis rapidamente. Com componentes prontos, como botões e grids, ele acelera o desenvolvimento de interfaces, garantindo compatibilidade entre dispositivos e navegadores.", "Bootstrap")}>
                                <img src={bootstrapIcon} alt="Bootstrap Icon" />
                            </div>
                            <div className="card-tecs" onClick={() => mudarTexto("Tailwind é um framework CSS utilitário que permite criar designs diretamente no HTML, com classes prontas para controle de espaçamento, cores e alinhamento. Ele oferece grande flexibilidade e agilidade na criação de interfaces personalizadas, mantendo o código organizado.", "Tailwind")}>
                                <img src={tailwindIcon} alt="Tailwind Icon" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="card-tecs" onClick={() => mudarTexto("React é uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e componentes reutilizáveis. Ele permite o desenvolvimento de aplicações web interativas e escaláveis, com atualizações rápidas no DOM por meio de seu sistema de renderização eficiente.", "React")}>
                                <img src={reactIcon} alt="React Icon" />
                            </div>
                            <div className="card-tecs" onClick={() => mudarTexto("GitHub é uma plataforma de hospedagem de código baseada em Git, que permite controle de versão, colaboração em projetos e compartilhamento de repositórios. É uma ferramenta essencial para desenvolvedores, facilitando o trabalho em equipe e o gerenciamento de projetos open-source.", "GitHub")}>
                                <img src={githubIcon} alt="GitHub Icon" />
                            </div>
                            <div className="card-tecs" onClick={() => mudarTexto("Figma é uma ferramenta de design colaborativa usada para criar interfaces e protótipos de alta fidelidade. Ideal para trabalho em equipe, permite a criação de layouts e fluxos de interface, além de facilitar a interação entre designers e desenvolvedores com seus recursos de compartilhamento em tempo real.", "Figma")}>
                                <img src={figmaIcon} alt="Figma Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
