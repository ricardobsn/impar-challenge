import React from 'react'
import axios from "../../axios";

export const deleteNews = (id) => {
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

export const aproveNews = (id) => {
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

export const rejectNews = (id) => {
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
