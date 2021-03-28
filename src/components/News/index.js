import React from 'react'
import "./style.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditIcon from '@material-ui/icons/Edit';
import { useStatevalue } from "../../StateProvider";
import { deleteNews, aproveNews, rejectNews } from "./actions"
import { Link } from "react-router-dom";

function News({ title, description, newsDate, id, waitingAprovation, uf, city }) {

    const [{ news }, dispatch] = useStatevalue();

    const editNews = (id) => {
        dispatch({
            type: "SET_NEWS", news: {
                id,
                title,
                description,
                uf,
                city,
                dateNews: newsDate
            }
        });
    }

    return (
        <div className="news">
            <div className="news_info">
                <div className="news_infoTitle">
                    <p style={{ fontSize: 20, fontWeight: 500 }}>TÍTULO:</p>
                    <DeleteIcon style={{ marginLeft: 60 }} onClick={() => deleteNews(id)} />
                    {waitingAprovation && (
                        <Link to='/edit'><EditIcon style={{ marginLeft: 20 }} onClick={() => editNews(id)} /></Link>)}
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
