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
    margin-top: 30px;
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

.keyboard{
    /* text-align: center; */
    height: fit-content;
    margin-top: 15px;
    font-size: 35px;
  
}

.profile{
    /* text-align: center; */
    height: fit-content;
    font-size: 40px;
    cursor: pointer;
}

.user{
    color : ${({theme})=>theme.textColor};
}

.info{
    display:flex;
    justify-content: space-between;
}

.profile-pic{
    width:3rem;
    heighr: 3rem;
    border-radius : 50%;
    cursor: pointer;
}

.logout{
    font-size: 18px;
    cursor:pointer;
}

.logout:hover{
    font-weight: 700;
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
}

.social-media a{
    color: #551A8B;
    cursor: pointer;
}



.footer{

    position : fixed;
    bottom:0;
    margin-bottom:1rem;
    display: flex;
    gap:60rem;
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

.stats-box{
    display:flex;
    justify-content: space-between;
    align-items:center;
}

.right-stats{
    width:70%;
}

.title{
    font-weight:700;
    font-size:18px;
    color : ${({theme})=>theme.textColor};
}

.title span{
    font-weight:400;
    font-size:12px;
    color : ${({theme})=>theme.textColor};
}
.subtitle{
    margin-bottom: 1rem;
    color : ${({theme})=>theme.textColor};
}

.try-again{
    padding: 0.5rem 1rem;
    background : ${({theme})=>theme.textColor};
    color : ${({theme})=>theme.background};
    border-radius: 5px;
    cursor: pointer;
    border:none;
}

.canvas{
    display:flex;
    flex-direction:column;
    gap:2rem;
}

.graph{
    width:60%;
}

//table of user 
.css-1ygcj2i-MuiTableCell-root{
    font-weight:700;
    font-size:1rem;
    color : ${({theme})=>theme.textColor} !important;
}

.css-1q1u3t4-MuiTableRow-root{
    color : ${({theme})=>theme.textColor} !important;
}

.correct{
    color:green;
}

.incorrect{
    color:red;
}`;
