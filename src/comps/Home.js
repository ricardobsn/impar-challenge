import React from 'react'
import "./Home.css"
import News from "./News"


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <h3 style={{marginLeft: 20}}>Central de Notícias:</h3>
                <div className="home_row">
                    <News />
                    <News />
                </div>
            </div>
        </div>
    )
}

export default Home
