import React from "react";
import { useState } from "react";
import data from '../../data'

export default function Form() {

    const [formData, setFormData] = useState(
        {topText: '', bottomText: ''}
        )

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'https://i.imgflip.com/26jxvz.jpg'
    })

    const [allMemeImages, setMemeImg] = useState(data)

    console.log(formData)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }
        )
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <main className="formContainer">
            <div className="mainContainer">
                <form onSubmit={handleSubmit}>
                    <div className="inputs" >
                        <input
                        onChange={handleChange}
                        name='topText'
                        className="topText"
                        type='text'
                        placeholder="Top Text"
                        value={formData.topText}
                        ></input>
                        <input
                        onChange={handleChange}
                        name="bottomText"
                        className="bottomText"
                        type='text'
                        placeholder="Bottom Text"
                        value={formData.bottomText}
                        ></input>
                    </div>
                    <button 
                    onClick={handleClick}
                    >
                        Get meme
                    </button>
                </form>
                <div className="meme">
                    <img className="memeImg" src={meme.randomImg} />
                    <h2 className="memeText top">{formData.topText}</h2>
                    <h2 className="memeText bottom">{formData.bottomText} </h2>
                </div>
            </div>
            
        </main>
    )
}