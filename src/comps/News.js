import React from 'react'
import "./News.css"
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "../axios";


function News({title, description, newsDate, id}) {

    const deleteNews = (id) => {
        axios({
            method: "delete",
            url: `/news/${id}`,
            headers: { "content-type": "application/json" },
            json: true
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("DELETOU!!!!");
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
                    <DeleteIcon style={{marginLeft:60}}  onClick={()=> deleteNews(id)}/>
                </div>
                <p>{title}</p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DESCRIÇÃO:</p>
                <p> {description} </p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DATA: <small>{newsDate}</small> </p>
            </div>

        </div>
    )
}

export default News
