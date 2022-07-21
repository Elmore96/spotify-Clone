import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Header from '../Header';
import PopUp from '../PopUp';
import './Home.css'

export default function Home() {

  const [main, setMain] = useState([])

  return (
    <div className='homePage'>
      <Header setMain={setMain}/>
      <div className='block-container'>
      <div className='container'>
        { 
        main.map(v => {
        let views = (v.views.toString().length > 6) ? v.views.toLocaleString().slice(-0, -8) + ' M' :
        (v.views.toString().length > 3) ? v.views.toLocaleString().slice(-0, -4) + ' K' : v.views.toLocaleString();
          let title = (v.title.length > 25) ? `${v.title.slice(0, 25)}...` : v.title;
          return (<div key={v.id} className='card' data-txt={title}>
            <Link to={'/Song/' + `${v.id}`}>
              <div className='imgBx'>
              <div className='image' style={{ backgroundImage: `url(${v.thumbnail.url})` }} ></div>
              </div>
            <div className='contentBx'>
              <div className='bottom-popup'>
            <div className='title' onMouseOver={(el)=> el.target.innerText = v.title}
              onMouseLeave={(el)=> el.target.innerText = title}  >{title}</div>
            <div>views: {views}</div>
            <button onClick={()=> {document.querySelector('.popUpBackground').style = 'display: block;'}}>save to playlist </button>
            </div>
            </div>
            </Link>
          </div>)
        })}
      </div>
    </div>
  </div>
  )
}
