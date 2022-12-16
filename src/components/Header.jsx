import React from "react";

export default function Header() {
    return (
        <div className="headerSection">
            <div className="headerContainer">
                <div className="logoSection">
                    <img className="troll" src="./public/assets/troll.png" />
                    <span className="title">MEME GENERATOR</span>
                </div>
                <div className="descriptionSection">
                    <span className="description">Top 10 Meme Generator</span>
                </div>
            </div>
        </div>
    )
}