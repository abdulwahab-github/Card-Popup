import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "../Screens/Home";
import Formm from "../Screens/Form";

function AppRouter() {
  return (
    <>
  
      <BrowserRouter>
   
      
        <Routes>
        <Route path="/" element={<Home/>} />         
        <Route path="form" element={<Formm/>} />         
              
         </Routes>
  </BrowserRouter>


    </>
  )
}

export default AppRouter;
