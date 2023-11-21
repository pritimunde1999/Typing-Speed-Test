import { Box, Button, TextField } from '@mui/material';
import React, { useRef} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'
import { toast } from 'react-toastify'


const LoginForm = ({handleCloseModal}) => {
   const emailRef = useRef(null)
   const passwordRef = useRef(null)

   function handleSubmit(){
      const newEmail = emailRef.current.value
      const newPassword = passwordRef.current.value
      
    
     if(!newEmail || !newPassword)
     {
        toast.error("Please fill all the details!")
        return 
     }
     
     signInWithEmailAndPassword(auth, newEmail, newPassword)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user)
       toast.success("login successfully")
       handleCloseModal()
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       toast.error(errorMessage)
     });
 }
   

  return (
     <Box
       p={3}
       style={{
         display: 'flex',
         flexDirection : 'column',
         alignItems:'center',
         gap : '20px'
       }}
     >

        <TextField
           variant='outlined'
           type='email'
           label="Enter Email"
           inputRef={emailRef}
         //   onChange={(e)=>setUserInput({...userInput,email:e.target.value})}
           style={{width:'80%'}}

           
        >
        </TextField>

        <TextField
           variant='outlined'
           type='password'
           label="Enter Password"
           inputRef={passwordRef}
         //   onChange={(e)=>setUserInput({...userInput,password:e.target.value})}
           style={{width:'80%'}}

           
        ></TextField>

        <Button variant='contained' size='large' onClick={handleSubmit}>Login</Button>

     </Box>
  )
}

export default LoginForm