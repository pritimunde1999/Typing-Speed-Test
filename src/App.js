import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TypingBox from "./components/TypingBox";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { Routes, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./Styles/globalStyle";
import { useTheme } from "./Context/ThemeContext";


console.log("hello")

const App = () => {

   const {theme} = useTheme();
   console.log(theme);
  return (
     <ThemeProvider theme={theme}>
      <div className="app">

        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/result" element=<Result /> />
          <Route path="/" element=<TypingBox /> />

        </Routes>

        <Footer />


      </div>
      </ThemeProvider>
   
  )
}

export default App;