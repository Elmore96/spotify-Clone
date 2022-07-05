import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Serch from '../Serch';
import './Home.css'

export default function Home() {

  const [serch, setSerch] = useState('')
  const [main, setMain] = useState([])


  function Serching() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        'X-RapidAPI-Key': '8fe5f15862mshd21e36bd48c59cap1d5a95jsn5c1159de872b'
      }
    };

    let res = serch.split(' ').join('%2B')

    fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + res, options)
      .then(response => response.json())
      .then(response => { console.log(response.results); setMain(response.results) })
      .catch(err => console.error(err))
  }


  return (
    <div>
      
      <header className='search'>
        <label style={{ fontSize: '1.5rem', marginTop: '-0.2rem', marginRight: '0.4rem' }}>search</label>
        <input type='text' style={{ height: '1.5rem', fontSize: '1.3rem', fontFamily: 'serif' }} onChange={(e) => setSerch(e.target.value)} />
        <button style={{ fontSize: '1.3rem', marginLeft: '0.4rem' }} onClick={Serching}>click</button>
      </header>
      <div className='container'>
        {main.map(v => {
          let views = (v.views.toString().length > 6) ? v.views.toLocaleString().slice(-0, -8) + ' M' :
            (v.views.toString().length > 3) ? v.views.toLocaleString().slice(-0, -4) + ' K' : v.views.toLocaleString();
          let title = (v.title.length > 35) ? `${v.title.slice(0, 35)}...` : v.title;

          // return (<div className='card'><a href={v.url}>
          //   <div className='title'>{title}</div>
          //   <div className='image' style={{backgroundImage:`url(${v.thumbnail.url})`, backgroundSize: 'cover'}} ></div>
          //   <div>views: {views}</div>
          //   </a>
          //   </div>)
          // return (<div className='card'>
          //   <div className='title'>{title}</div>
          //   <ReactPlayer controls width='350px' height='200px' url={v.url}>
          //     {/* <div className='image' style={{ backgroundImage: `url(${v.thumbnail.url})`, backgroundSize: 'cover' }} ></div> */}
          //   </ReactPlayer>
          //   <div>views: {views}</div>

          // </div>)
          return (<div key={v.id} className='card'>
            
            <div className='title'>{title}</div>
            <Link to={'/Song/' + `${v.id}`}>
              <div className='image' style={{ backgroundImage: `url(${v.thumbnail.url})`, backgroundSize: 'cover' }} ></div>
            </Link>
            <div>views: {views}</div>

          </div>)
        })}
      </div>
    </div>
  )
}
