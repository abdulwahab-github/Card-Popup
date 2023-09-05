import { Button } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'

import MediaCard from './Cards'

function Home() {

    const navigate = useNavigate("")

  return (
    <div>
      <Button variant='contained' onClick={()=>navigate("form")}>Go To Form</Button>
      <MediaCard/>
        
    </div>
  )
}

export default Home