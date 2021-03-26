import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <img
                className='header_logo'
                src="https://impar.com.br/img/inpartec-logo.svg"
            />
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_comands">
                        Notícias em Aprovação
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_comands">
                        Notícias Reprovadas
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_comands">
                        Cadastrar Notícia
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
