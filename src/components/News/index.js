import React, { useState } from 'react'
import "./style.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditIcon from '@material-ui/icons/Edit';
import { useStatevalue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { deleteNews, aproveNews, rejectNews , editNews } from "./actions"

function News({ title, description, newsDate, id, waitingAprovation, uf, city }) {

    const [{ news }, dispatch] = useStatevalue();

    console.log("news!!!!", news)

    return (
        <div className="news">
            <div className="news_info">
                <div className="news_infoTitle">
                    <p style={{ fontSize: 20, fontWeight: 500 }}>TÍTULO:</p>
                    <DeleteIcon style={{ marginLeft: 60 }} onClick={() => deleteNews(id)} />
                    {waitingAprovation && (  <Link to={{pathname:'/cadastro', state: {teste: "teste"}}}> 
                    <EditIcon style={{ marginLeft: 20 }} /></Link>)}
                </div>
                <p>{title}</p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DESCRIÇÃO:</p>
                <p> {description} </p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DATA: <small>{newsDate}</small> </p>
                {waitingAprovation && (<div className="news_aprovation">
                    <ThumbUpIcon onClick={() => aproveNews(id)} style={{ marginRight: 20 }} />
                    <ThumbDownIcon onClick={() => rejectNews(id)} />
                </div>)}
            </div>

        </div>
    )
}

News.defaultProps = {
    waitingAprovation: false,
};

export default News
