import React, { useState } from 'react'
import "./style.css"
import axios from "../../axios";
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function RegisterNews() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");
    const [newsDate, setNewsDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title === "" || description === "") {
            toast.info("Preenchimento obrigatório dos campos Título e Descrição")
        }
        const response = await axios({
            method: "post",
            url: "/news",
            data: {
                title,
                description,
                uf,
                city,
                dateNews: newsDate
            },
            headers: { "content-type": "application/json" },
            json: true
        })
            .then(res => {
                if (res.status === 200) {
                    setTitle("");
                    setDescription("");
                    setUf("");
                    setCity("");
                    setNewsDate("");
                    toast.success("Notícia salva com sucesso!")
                }
            })
            .catch(error => {
                toast.error(error);
            });
    };

    return (
        <div className="register">
            <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
            <div className="register_description">
                <h2>Cadastro de Notícias</h2>
                <p className="register_descriptionDetailed">Descreva detalhadamente uma notícia para que todos possam saber o que está acontecendo.</p>
            </div>
            <div className="register_input">
                <input value={title} className='registerTitle_input' type='text' onChange={(e) => { setTitle(e.target.value) }} placeholder="Título da Notícia" />
                <textarea value={description} className='description_input' onChange={(e) => { setDescription(e.target.value) }} placeholder="Descrição" />
                <input value={uf} className='uf_input' type='text' onChange={(e) => { setUf(e.target.value) }} placeholder="UF" />
                <input value={city} className='city_input' type='text' onChange={(e) => { setCity(e.target.value) }} placeholder="Cidade" />
                <input value={newsDate} className='date_input' type='date' onChange={(e) => { setNewsDate(e.target.value) }} placeholder="Data" />
                <button onClick={handleSubmit} type="submit" className="button_input">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

export default RegisterNews
