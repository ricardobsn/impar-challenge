import React from 'react'
import "./RegisterNews.css"

function RegisterNews() {
    return (
        <div className="register">
            <div className="register_description">
                <h2>Cadastro de Notícias</h2>
                <p className="register_descriptionDetailed">Descreva detalhadamente uma notícia para que todos possam saber o que está acontecendo.</p>
            </div>
            <div className="register_input">
                <input className='registerTitle_input' type='text' placeholder="Título da Notícia" />
                <textarea className='description_input' placeholder="Descrição" />
                <input className='uf_input' type='text' placeholder="UF" />
                <input className='city_input' type='text' placeholder="Cidade" />
                <input className='date_input' type='date' placeholder="Data" />
                <button type="submit" className="button_input">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

export default RegisterNews
