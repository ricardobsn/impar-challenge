import React, { useState } from 'react'
import "./RegisterNews.css"

function RegisterNews({news}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");
    const [newsDate, setNewsDate] = useState("");

    const handleSubmit = (e) => {
        // e.preventDefault();
        // db.collection("posts").add({
        //   message: input,
        //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //   profilePic: user.photoURL,
        //   userName: user.displayName,
        //   image: imageUrl,
        // });
        setTitle("");
        setDescription("");
        setUf("");
        setCity("");
        setNewsDate("");
    };

    return (
        <div className="register">
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
