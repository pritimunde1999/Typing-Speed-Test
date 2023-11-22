import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import LoginForm from './LoginForm';
import { AppBar, Box, Modal, Tab, Tabs } from '@mui/material';
import GoogleButton from 'react-google-button';
import SignUpForm from './SignUpForm';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";


const Profile = () => {

   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(0);

   const [user] = useAuthState(auth);
   
   const navigate = useNavigate();


   function handleClick() {
   
      if (user) { //user logged in profile page open 
         navigate('/user')
      } else {
         setOpen(true);
      }

   }

   function handleCloseModal() {
      setOpen(false)
   }

   function handleValueChange(e, v) {
      setValue(v);
   }

   function handleGoogleButtonClick() {
      signInWithPopup(auth, provider)
         .then((result) => {
            const user = result.user;
            toast.success("SignUp Successfully!")
            handleCloseModal();

         }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)

         });

   }

   function logout() {

      signOut(auth).then(() => {
         // Sign-out successful.
         toast.success("Signed Out!")
      }).catch((error) => {
        toast.error(error.message)
      });

   }

   return (
      <div>
         <div style={{ height: 'auto', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {user && user.photoURL!==null ? <img className='profile-pic' onClick={handleClick} src={user.photoURL}/> :  <CgProfile onClick={handleClick} className='profile' /> }
            {user && <p onClick={logout} className='logout'>Logout</p>}
         </div>

         <Modal
            open={open}
            onClose={handleCloseModal}
            style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               color: 'black'
            }}
         >

            <div style={{ width: '480px', textAlign: 'center' }}>
               <AppBar position='static' style={{ opacity: '0.9', background: 'white' }}>
                  <Tabs variant='fullWidth' value={value} onChange={handleValueChange} >
                     <Tab label='Login' style={{ width: '80%' }}></Tab>
                     <Tab label='Sign Up'></Tab>
                  </Tabs>
                  {value === 0 && <LoginForm handleCloseModal={handleCloseModal} />}
                  {value === 1 && <SignUpForm handleCloseModal={handleCloseModal} />}
                  <Box>

                     <span style={{ color: 'black' }}>OR</span>
                     <GoogleButton style={{ width: '100%', marginTop: '10px' }} onClick={handleGoogleButtonClick}></GoogleButton>

                  </Box>
               </AppBar>
            </div>

         </Modal>
      </div>
   )
}

export default Profile