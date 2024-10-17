export function Projects() {
    return (
        <>
            <section className="container-projects" id='projects'>
                <h1 data-aos="fade-up" >Projetos em Destaque</h1>
                <div className="container-proj" data-aos="fade-up-right">
                    <div className="image-area">
                        <img src="../src/assets/img/Group 338.svg" alt="" />
                    </div>
                    <div className="text-area">
                        <h2>BlueBank</h2>
                        <p>BlueBank é um projeto de site para um banco digital fictício. O site oferece informações sobre os serviços do banco, como conta digital, cartões, transferências, e suporte ao cliente. Este repositório contém o código-fonte do site, desenvolvido com HTML, CSS e JavaScript.</p>
                        <div>
                            <a href="https://victorbrasileiroo.github.io/BlueBank/">Demo</a>
                            <a href="https://github.com/VictorBrasileiroo/BlueBank">Github</a>
                            <div className="tecs-projects">
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-javascript 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-html 1.svg" alt="" style={{ width: '40px', position: 'relative', left: '5px' }} />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-css 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-atrevimento 1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-proj" data-aos="fade-up-left">
                    <div className="text-area">
                        <h2>Portifólio</h2>
                        <p>Esse Projeto é um portfólio pessoal e foi desenvolvido em React, utilizando Sass para uma estilização modular e eficiente, com o design previamente planejado no Figma. A estrutura do projeto é baseada nos principais pilares da web: HTML, CSS e JavaScript, garantindo uma interface moderna, responsiva e de fácil navegação, com foco na apresentação de habilidades e projetos de forma dinâmica e atraente.</p>
                        <div>
                            <a>Demo</a>
                            <a>Github</a>
                            <div className="tecs-projects">
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-reagir 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-css 1.svg" style={{ position: 'relative' }} alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-atrevimento 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/Group.svg" alt="" style={{ width: '25px', position: 'relative', left: '5px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-area">
                        <img src="../src/assets/img/Group 339.svg" alt="" />
                    </div>
                </div>

                <div className="container-proj" data-aos="fade-down-right">
                    <div className="image-area">
                        <img src="../src/assets/img/Group 343.svg" alt="" />
                    </div>
                    <div className="text-area">
                        <h2>Weather Watch</h2>
                        <p>Esta aplicação web permite a verificação das condições climáticas atuais. O projeto é um estudo focado em diversos conceitos e tecnologias, incluindo APIs, HTTP, requisições, promises, AJAX e Axios, entre outros. Desenvolvido exclusivamente para fins educativos, visa proporcionar uma compreensão prática e aplicada dessas ferramentas e técnicas.</p>
                        <div>
                            <a href="https://victorbrasileiroo.github.io/WeatherWatch/">Demo</a>
                            <a href="https://github.com/VictorBrasileiroo/WeatherWatch/">Github</a>
                            <div className="tecs-projects">
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-javascript 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-css 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-html 1.svg" alt="" style={{ width: '40px', position: 'relative', left: '2px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-proj" data-aos="fade-down-left">
                    <div className="text-area">
                        <h2>Login Screen</h2>
                        <p>Este é um projeto de uma tela de login simples e responsiva desenvolvida usando React, Tailwind CSS, Vite e Shadcn. A aplicação foi criada com o objetivo de fornecer uma interface de login elegante e eficiente para autenticação de usuários.</p>
                        <div>
                            <a href="https://victorbrasileiroo.github.io/LoginScreen/">Demo</a>
                            <a href="https://github.com/VictorBrasileiroo/LoginScreen/">Github</a>
                            <div className="tecs-projects">
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-reagir 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/icons8-tailwind-css 1.svg" alt="" />
                                </div>
                                <div className="card-tec">
                                    <img src="../src/assets/img/Group.svg" alt="" style={{ width: '25px', position: 'relative', left: '5px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-area">
                        <img src="../src/assets/img/Group 344.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}