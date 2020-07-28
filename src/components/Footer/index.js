import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://fontmeme.com/permalink/200728/a81169feb5b9764457468767301a528c.png" alt="Logo MecFlix" />
      </a>
      <p>
        Feito com amor e carinho por 
        {' '}
        <a href="https://www.github.com/Devsart">
          Matheus Sartor
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
