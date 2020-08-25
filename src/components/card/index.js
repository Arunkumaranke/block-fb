import React, { useState } from 'react';
import './style.css';

const pic = [
    {
        img: `url("https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.16376-6/95811102_518374869069846_5901064230370541568_n.jpg?_nc_cat=1&_nc_sid=a86453&_nc_ohc=ZbCicgChr7AAX8AkthV&_nc_ht=scontent.fmaa2-2.fna&oh=3bd314895a185ae128c80b215c4219ab&oe=5F6C283F")`,
    },
    {
        img: `url("https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.16376-6/95606844_241539447091552_8107844879758917632_n.jpg?_nc_cat=1&_nc_sid=a86453&_nc_ohc=vRG4fxh_edcAX-sRaHE&_nc_oc=AQlQmPmp_LqG4-szdA10NheoOv-zx5eJAdSntcCzXd0rwk2-GWrN8p9HYbahG-_KkDL3XVVf_G0EPanSYh5gNt2q&_nc_ht=scontent.fmaa2-2.fna&oh=a2a80208e2b005c18105e45fe5fe0861&oe=5F6BE0A9")`,
    },
    {
        img: `url("https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.16376-6/95750789_231799578091089_2003061283863134208_n.jpg?_nc_cat=1&_nc_sid=a86453&_nc_ohc=QoOLJ4XdAMYAX8w55O5&_nc_ht=scontent.fmaa2-2.fna&oh=11a0922fe6105da48c4c0e0aa330165b&oe=5F6B4046")`,
    },
    {
        img: `url("https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.16376-6/95561052_225753762174215_6873317849771802624_n.jpg?_nc_cat=1&_nc_sid=a86453&_nc_ohc=kRU9i5NJRvYAX-s9rbF&_nc_ht=scontent.fmaa2-2.fna&oh=b6111b1c994b3688f8d0140037f4c469&oe=5F6B5163")`,
    },
    {
        img: `url("https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.16376-6/95654828_681717845705874_614215975851524096_n.jpg?_nc_cat=1&_nc_sid=a86453&_nc_ohc=-Dp6LsiOx0AAX_0wg3E&_nc_ht=scontent.fmaa2-2.fna&oh=e1779d4cbc0d4b360e893d70b8b499b5&oe=5F6C3B05")`,
    },
]
function CardPost() {
    const [text,setText] =useState("")
    const [img,setImg] =useState(null)
    const [disable,setDisable] =useState(false)
    const handleText = (e) =>{
        setText(e.target.value)
    }
    const handleImg = (data) =>{
        setDisable(true)
        setImg(data)
    }
    const handleColor = () =>{
        setImg(`url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.audi.com%2Fci%2Fen%2Fintro%2Fbasics%2Fcolours.html&psig=AOvVaw2jzMR1nQQtKDVk0NFSxJB1&ust=1598449895654000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiy24XAtusCFQAAAAAdAAAAABAD")`)
        setDisable(false)
            
    }
    return (
        <div className="cardContainer">
            <div style={{backgroundImage:`${img}`}}  className="card">
                <input disabled={disable}  value={text} onChange={handleText} placeholder="Whats in your mind...!!!" className="input" />
            </div>
            <div className="icons">
            <div className="container">
                    <div className="imgWrapper">
                        <div onClick={handleColor} className="img" style={{ backgroundColor:'#F0F2F5' }}>
                            
                        </div>
                    </div>
                </div>
            {pic.map((data, key) => (
                <div key={key} className="container">
                    <div className="imgWrapper">
                        <div onClick={()=>handleImg(data.img)} className="img" style={{ backgroundImage:`${data.img}` }}>
                            
                        </div>
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}

export default CardPost;
