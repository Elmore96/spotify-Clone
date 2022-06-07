import React, {  useState } from 'react'
import Header from '../Header';

export default function Home() {
  
  const[serch,setSerch]=useState('')
  const[main,setMain] = useState([])
  
  function Serching(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        'X-RapidAPI-Key': '8fe5f15862mshd21e36bd48c59cap1d5a95jsn5c1159de872b'
      }
    };
    
    let res = serch.split(' ').join('%2B')

      fetch('https://simple-youtube-search.p.rapidapi.com/search?query='+res, options)
      .then(response => response.json())
      .then(response => {console.log(response.results); setMain(response.results)})
      .catch(err => console.error(err))
}


  return (
    <div>
      <header>
        <label>blaaa</label>
        <input type='text' onChange={(e)=>setSerch(e.target.value)}/>
        <button onClick={Serching}>click</button>
      </header>
      {main.map(v =>{
        return (<div>{v.thumbnail.url}</div>)
      })}
    </div>
  )
}
