import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebaseConfig';

const UserInfo = ({totalTests}) => {
    const [user] = useAuthState(auth);

  return (
    <div className='user'>
        <div className='info'>
            <h5>{user && user.email}</h5>
            <h5>{user && user.metadata.creationTime}</h5>
        </div>
        <h3 style={{textAlign:'center'}}>Total Test Taken- {totalTests}</h3>
    </div>
  )
}

export default UserInfo