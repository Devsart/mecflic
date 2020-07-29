import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="Home">
        <img src="https://fontmeme.com/permalink/200728/a81169feb5b9764457468767301a528c.png" alt="Logo MecFlix" />
      </Link>
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
