import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./Styles/globalStyle";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import User from "./Pages/User";

const App = () => {

  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ToastContainer />
        <GlobalStyle />
      
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/user"  element={<User/>}/>
        </Routes>

        


      </div>
    </ThemeProvider>

  )
}

export default App;