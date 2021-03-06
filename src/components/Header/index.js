import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src="https://impar.com.br/img/inpartec-logo.svg"
                />
            </Link>
            <div className="header_nav">
                <div className="header_option">
                    <h3 className="header_comands">
                        <Link to='/aprovacao'>  Notícias em Aprovação  </Link>
                    </h3>
                </div>
                <div className="header_option">
                    <h3 className="header_comands">
                        <Link to='/rejeitadas'>   Notícias Reprovadas </Link>
                    </h3>
                </div>
                <div className="header_option">
                    <h3 className="header_comands">
                        <Link to='/cadastro'> Cadastrar Notícia </Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Header
