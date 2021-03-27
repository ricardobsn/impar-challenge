import React, { useState, useEffect } from 'react'
import "./Home.css"
import News from "./News"
import axios from "../axios";
import moment from "moment";


function Home() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const response = await axios({
                method: "get",
                url: "/news",
            });
            setNews(response.data);
        };
        getNews();
    }, []);

    console.log("!!!!!!!!!!!", news)

    return (
        <div className="home">
            <div className="home_container">
                <h3 style={{ marginLeft: 20 }}>Central de Notícias:</h3>
                <div className="home_row">
                    {news && news.map((n) => (
                        <News
                            title={n.title}
                            description={n.description}
                            newsDate={moment(n.dateNews).format("DD/MM/YYYY")}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home