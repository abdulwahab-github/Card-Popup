import React from 'react';
import Button from '@mui/material/Button';
import "./App.css"


function Option(props) {
    const {data , onClick, data1, } = props;
  return (
    <div >
        <div >
        {data.map((x , i)=>(<Button
        onClick={() => data1(x)}
        variant="contained"  >{x}</Button>))}
        
        
   </div>

    </div>
  )
}

export default Option;