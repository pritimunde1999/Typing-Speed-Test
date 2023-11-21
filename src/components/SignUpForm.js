import { Box, Button, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

const SignUpForm = ({handleCloseModal}) => {

   
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const cPasswordRef = useRef(null)
     
      function handleSubmit(){
         const newEmail = emailRef.current.value
         const newPassword = passwordRef.current.value
         const newCPassword = cPasswordRef.current.value
       
        if(!newEmail || !newPassword || !newCPassword)
        {
           toast.error("Please fill all the details!")
           return 
        }
        if(newPassword !== newCPassword)
        {
            toast.error("Password mismatch!")
            return 
        }
        
        createUserWithEmailAndPassword(auth, newEmail, newPassword)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            toast.success("user created")
            handleCloseModal();
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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}
        >

            <TextField
                variant='outlined'
                type='email'
                label='Enter Email'
                inputRef={emailRef}
                // onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                style={{width:'80%'}}

            ></TextField>

            <TextField
                variant='outlined'
                type='password'
                label='Enter Password'
                inputRef={passwordRef}
                // onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                style={{width:'80%'}}

               
            ></TextField>


            <TextField
                variant='outlined'
                type='password'
                label='Enter Confirm Password'
                inputRef={cPasswordRef}
                // onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                style={{width:'80%'}}

              
            ></TextField>

           <Button variant='contained' size='large' onClick={handleSubmit}>Sign Up</Button>
        </Box>
    )
}

export default SignUpForm


