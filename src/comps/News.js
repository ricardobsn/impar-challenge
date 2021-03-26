import React from 'react'
import "./News.css"
import DeleteIcon from '@material-ui/icons/Delete';

function News() {
    return (
        <div className="news">
            <div className="news_info">
                <div className="news_infoTitle">
                    <p style={{ fontSize: 20, fontWeight: 500 }}>TÍTULO:</p>
                    <DeleteIcon style={{marginLeft:60}}/>
                </div>
                <p>Seja um desenvolvedor</p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DESCRIÇÃO:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>DATA: <small>30/01/2021</small> </p>
            </div>

        </div>
    )
}

export default News
