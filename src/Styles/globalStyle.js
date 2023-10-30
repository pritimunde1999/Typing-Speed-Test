import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
     
    
}

body{
    background : ${({theme})=>theme.background};
}

.app{
    margin: auto;
    margin-top: 10px;
    width: 85vw;
    display: flex;
    flex-direction: column;
    
}

.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    color : ${({theme})=>theme.textColor};
}


.left{
    display: flex;
    gap:30px;
    align-items:center;
}

.left div{
    /* text-align: center; */
    height: fit-content;
    margin-top: 15px;
    font-size: 35px;
  
}

.right div{
    /* text-align: center; */
    height: fit-content;
    margin-top: 15px;
    font-size: 35px;
    cursor: pointer;
}

.refresh{
    color : ${({theme})=>theme.textColor};
    cursor: pointer;
    font-size: 25px;
    
}

.btn-container{
    color : ${({theme})=>theme.textColor};
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.header h1{
    font-family: 'Young Serif', serif;
    font-size: 45px;
}

.buttons button{
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
    background-color: black;
    background : ${({theme})=>theme.textColor};
    color : ${({theme})=>theme.background};
}

.social-media{
    font-size: 30px;
    display: flex;
    gap: 20px;
    cursor: pointer;
    color: #551A8B;
}



.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.timer{
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
    color : ${({theme})=>theme.textColor};
}

.timerBtn button{
    margin-right: 10px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    color : ${({theme})=>theme.textColor};
}

.timerBtn button:hover{
     color: green;
}



.type-box{
    height:400px;
    font-size: 20px;
    font-weight: 600;
    color : ${({theme})=>theme.typeBoxText};
}


.words{
    display: flex;
    flex-wrap: wrap;
}

.word{
    padding:4px;
}

.hidden-input{
    opacity: 0;

}



.current{
    border-left: 1px solid;
    animation: 2s ease infinite blinking;

    @keyframes blinking{
        0%{border-left-color : ${({theme})=>theme.text}}
        25%{border-left-color : ${({theme})=>theme.background}}
        50%{border-left-color : ${({theme})=>theme.text}}
        75%{border-left-color : ${({theme})=>theme.background}}
        100%{border-left-color : ${({theme})=>theme.text}}
    
    }
   
}


.current-right{
    border-right: 1px solid ;
    animation: 2s ease infinite blinkingRight;

    @keyframes blinkingRight{
        0%{border-right-color : ${({theme})=>theme.text}}
        25%{border-right-color : ${({theme})=>theme.background}}
        50%{border-right-color : ${({theme})=>theme.text}}
        75%{border-right-color : ${({theme})=>theme.background}}
        100%{border-right-color : ${({theme})=>theme.text}}
    
    }
   
}



.correct{
    color:green;
}

.incorrect{
    color:red;
}`;
