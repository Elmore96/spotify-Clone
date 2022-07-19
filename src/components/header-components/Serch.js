import React, { useState } from 'react'


export default function SerchBar({main,setMain}) {
    const [serch, setSerch] = useState('')
    
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
        </div>
    )
}
