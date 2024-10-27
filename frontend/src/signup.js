import React, { useState } from 'react';

const Register = () => {

    const [newUser, setNewUser] = useState({
        id: Math.random(),
        name: '',
        img: '',
        phone: '',
        messages: []
    })



    return (
       <div className='container w-full h-full '>
           <div>

           </div>
       </div>
    )

}

export default Register