import React from "react";
import { useState } from "react";
import data from '../../data'

export default function Form() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'https://i.imgflip.com/26jxvz.jpg'
    })

    const [allMemeImages, setMemeImg] = useState(data)

    const handleClick = (e) => {
        e.preventDefault()
        const memesArray = allMemeImages.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => {
          return  {
                ...prevState,
                randomImg: memesArray[random].url
            }
        } )
        
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
                <img className="memeImg" src={meme.randomImg} />
            </div>
            
        </main>
    )
}