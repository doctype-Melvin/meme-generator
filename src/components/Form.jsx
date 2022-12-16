import React from "react";
import { useState } from "react";
import data from '../../data'

export default function Form() {
    const [memeImg, setImg] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const random = Math.floor(Math.random()*100)
        const url = data.data.memes[random].url
        setImg(url)
    }

    return (
        <main className="formContainer">
            <div className="mainContainer">
                <form>
                    <div className="inputs">
                        <input
                        className="topText"
                        type='text'
                        placeholder="Top Text"
                        ></input>
                        <input
                        className="bottomText"
                        type='text'
                        placeholder="Bottom Text"
                        ></input>
                    </div>
                    <button 
                    onClick={handleClick}
                    >
                        Get meme
                    </button>
                </form>
                
                <img className="memeImg" src={memeImg} />
            </div>
            
        </main>
    )
}