import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import TypingBox from "./components/TypingBox";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";
import "./styles.css"



const App = () =>{
    const[theme,setTheme] = useState("white");
   
    useEffect(() => {
        const root = document.getElementsByTagName("body")[0];
        if (root) {
          root.style.backgroundColor = theme;
        }
      }, [theme]);



    return(
        <div className="app">
            <Header/>
            <TypingBox/>
            <Footer setTheme={setTheme}/>
            <p>hello world</p>
        </div>
    )
}

export default App;