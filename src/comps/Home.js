import React from 'react'
import "./Home.css"
import News from "./News"


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <h3 style={{marginLeft: 20}}>Central de Notícias:</h3>
                <div className="home_row">
                    <News
                     title="Seja um desenvolvedor"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                     newsDate="05/07/2020"
                    />
                    <News />
                </div>
            </div>
        </div>
    )
}

export default Home