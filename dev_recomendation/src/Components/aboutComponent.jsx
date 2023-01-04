import React from "react";
import '../css/about.css';

const About = () => {
    return (
        <div className="aboutme">
            <div className="aboutme-content">
                <h1 className="aboutmeName">
                    Felipe Gadelha
                </h1>
                <div className="middle">
                    <p className="aboutmeDescription">
                        Sou um programador Full Stack Júnior, e construí esse site para<br />
                        botar em prática tudo que aprendi sobre Node.js, mas pretendo<br />
                        dar continuação ao projeto, até porque, saber por onde começar<br />
                        foi uma das minhas grandes dificuldades quando iniciei meus<br />
                        estudos na área. Caso queira entrar em contato, só escolher uma<br />
                        das opções abaixo.
                    </p>
                    <div className="profile">
                    </div>
                </div>
                <div className="div-form-text-social">
                    <a href="https://www.instagram.com/felipe.linog/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-lino-273578207/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href=" https://wa.me/5588992048450/">
                        <i className="fab fa-whatsapp-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;