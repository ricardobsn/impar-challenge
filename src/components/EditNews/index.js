import React, { useState } from 'react'
import "../RegisterNews/style.css"
import axios from "../../axios";
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function EditNews({ news }) {

    const editSubmit = (id) => {
        if (title === "" || description === "") {
            toast.info("Preenchimento obrigatório dos campos Título e Descrição")
        }
        axios({
            method: "put",
            url: `/news/${id}`,
            data: {
                title,
                description,
                uf,
                city
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
                    toast.success("Notícia atualizada com sucesso!")
                }
            })
            .catch(error => {
                toast.error(error);
            });
    };

    const [title, setTitle] = useState(news.title);
    const [description, setDescription] = useState(news.description);
    const [uf, setUf] = useState(news.uf);
    const [city, setCity] = useState(news.city);

    return (
        <div className="register">
            <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
            <div className="register_input">
                <input value={title} className='registerTitle_input' type='text' onChange={(e) => { setTitle(e.target.value) }} placeholder="Título da Notícia" />
                <textarea value={description} className='description_input' onChange={(e) => { setDescription(e.target.value) }} placeholder="Descrição" />
                <input value={uf} className='uf_input' type='text' onChange={(e) => { setUf(e.target.value) }} placeholder="UF" />
                <input value={city} className='city_input' type='text' onChange={(e) => { setCity(e.target.value) }} placeholder="Cidade" />
                <button type="submit" onClick={() => editSubmit(news.id)} className="button_input">
                    Salvar
            </button>
            </div>
        </div>
    )
}

export default EditNews
