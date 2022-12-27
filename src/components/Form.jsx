import React, { useEffect } from "react";
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

    const [allMemes, setAllMemes] = useState({})

    useEffect(() => {
        async function getMemes() {
            const res = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }
        )
    }

    const handleClick = (e) => {
        e.preventDefault()
        const random = Math.floor(Math.random() * allMemes.length)
        setMeme(prevState => {
          return  {
                ...prevState,
                randomImg: allMemes[random].url
            }
        } )
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                        value={meme.topText}
                        ></input>
                        <input
                        onChange={handleChange}
                        name="bottomText"
                        className="bottomText"
                        type='text'
                        placeholder="Bottom Text"
                        value={meme.bottomText}
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
                    <h2 className="memeText top">{meme.topText}</h2>
                    <h2 className="memeText bottom">{meme.bottomText} </h2>
                </div>
            </div>
            
        </main>
    )
}