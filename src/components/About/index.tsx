import React from "react";

import { AboutBox, Infos} from "./styles";
import ProfilePic from '../../assets/images/perfilredondo.png'

const About = () => {
    return (
        <div id="about">
            <AboutBox>
            <img src={ProfilePic} alt="Camila Profile Photo" />
            <Infos>
            <h1>Sobre Mim</h1>
            <p> meu nome é camila, tenho 23 anos, moro no brasil, atualmente estou estudando engenharia de software na universidade 
                federal do ceará. Amo aprender novas tecnologias, ver meu trabalho resultando em algo importante como um software é o que me faz continuar me apaixonando cada vez mais pela minha profissão. Engenharia de Software não são só vários algoritmos reunidos, não são somente códigos, vai além disso, são formas de impactar o cotidiano de todos, a fim de tornar mais fácil e ágil as tarefas rotineiras.
                Através disso, é que me mantenho focada para entregar o meu melhor para a sociedade e por este motivo, que decidi entrar em uma das melhores universidades que é a Universidade Federal do Ceará, afinal, precisaria começar de algum lugar. Assim que entrei, aproveitei cada oportunidade que aparecia, então logo adentrei no projeto empresa júnior, a qual me deu muita experiência em como trabalhar em equipe, solucionando problemas, prototipando em par, programando, fazendo uso de ferramentas que seriam necessárias para cada projeto novo, cujas são: wordpress, Elementor, Figma, Git, Scrum, Kamban, linguagens de programação Javascript e react.
                Além disso, sigo aprendendo coisas novas na faculdade como programação orientada a objetos em Java, algoritmos em grafos com Python, Linguagens de programação em Haskell, Requisitos de software, documentação, etc. Não esquecendo o que já aprendi em estrutura de dados com C, fundamentos de programação em C também, etc. Atualmente encontro-me iniciando o 4° semestre e ainda estudando cada vez mais.
            </p>
            </ Infos>
            </AboutBox>
        </div>
        
    );
};

export default About;