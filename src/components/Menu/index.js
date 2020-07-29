import React from 'react';
import Logo from '../../assets/img/logosartflix.png';
import './menu.css'
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button'
import { Link } from 'react-router-dom'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src = {Logo} alt="sartflixlogo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to= "/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;