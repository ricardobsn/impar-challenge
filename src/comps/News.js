import React, { useState } from 'react'
import "./News.css"
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "../axios";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { green } from '@material-ui/core/colors';


function News({ title, description, newsDate, id, waitingAprovation }) {

    const deleteNews = (id) => {
        axios({
            method: "delete",
            url: `/news/${id}`,
            headers: { "content-type": "application/json" },
            json: true
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    const aproveNews = (id) => {
        axios({
            method: "put",
            url: `/news/get/aprovetion/${id}`,
            headers: { "content-type": "application/json" },
            json: true
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Notícia aprovada com sucesso!")
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    const rejectNews = (id) => {
        axios({
            method: "put",
            url: `/news/get/rejection/${id}`,
            headers: { "content-type": "application/json" },
            json: true
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Notícia rejeitada com sucesso!")
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="news">
            <div className="news_info">
                <div className="news_infoTitle">
                    <p style={{ fontSize: 20, fontWeight: 500 }}>TÍTULO:</p>
                    <DeleteIcon style={{ marginLeft: 60 }} onClick={() => deleteNews(id)} />
                </div>
                <p>{title}</p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DESCRIÇÃO:</p>
                <p> {description} </p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DATA: <small>{newsDate}</small> </p>
                {waitingAprovation && (<div className="news_aprovation">
                    <ThumbUpIcon  onClick={() => aproveNews(id)} style={{marginRight:20}}/>
                    <ThumbDownIcon  onClick={() => rejectNews(id)} />
                </div>)}
            </div>

        </div>
    )
}

News.defaultProps = {
    waitingAprovation: false,
};

export default News
