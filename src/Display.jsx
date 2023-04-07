import React from "react";
import './style.css';

function Display(props) {
    const today_data = props.data[0];
    
    if (today_data) {
        const date = today_data.date;
        const url = today_data.url;
        const explanation = today_data.explanation;
        const title = today_data.title;
        const hdurl = today_data.hdurl;
        return (
            <>
                <div className="container">
                    <div className="title">{title}</div>
                    <div>{date}</div>
                    <img src={url}></img>
                    <div className="explanation">{explanation}</div>
                </div>
            </>
        )
    }
}

export default Display;