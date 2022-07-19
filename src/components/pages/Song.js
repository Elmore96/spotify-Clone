import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

export default function Song() {
    const {id } = useParams()
    return (
        <div  className='song'>
            
            <ReactPlayer controls url={`https://www.youtube.com/watch?v=${id}`}>

            </ReactPlayer>
          
        </div>
    )
    
    }
