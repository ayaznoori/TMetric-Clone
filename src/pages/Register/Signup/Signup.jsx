import React, { useState} from 'react'
import style from '../Signup/Signup.module.css'
import { useNavigate } from 'react-router-dom'
import {
  FormLabel,
  Input,
  Text,
  Button
} from '@chakra-ui/react'
const axios = require('axios');

const Signup = () => {
  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email:'',
    password:""
  })

  const handleChange = (e) => {
    // console.log(e.target)
     const {name, value} = e.target
     setUser({
      ...user,
      [name]: value
     })
  }

  const register = () => {
    const { name, email, password } = user
    if(name && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password ) {
      axios.post('http://localhost:9002/signup', user)
      .then(res => {})
      alert('signup successful');
      navigate('/login')
    }
    else {
      alert('Invalid Email entered')
    }
  }

  return (
    <div className={style.Container}>
    <div className={style.signupContainer}>
        <div className={style.signupContainer_1}>
        <div className={style.loginContainer_2}>
            <img style={{width:'120px', margin:'auto'}} src="https://roi4cio.com/fileadmin/user_upload/tmetric_logo.png" alt="logo" />
            <p>Create Your Account</p>
         </div>
         <div className={style.loginContainer_3}>
            <div>
              <FormLabel color='rgb(163,126,133)' fontSize='xs'>Name</FormLabel>
              <Input 
                padding={3} 
                borderRadius={3} 
                placeholder='john smith' 
                marginBottom={3} 
                size='xs' 
                type='name' 
                name='name'
                value={user.name}
                onChange={handleChange}
                />
              <FormLabel color='rgb(163,126,133)' fontSize='xs'>Email</FormLabel>
              <Input 
                padding={3} 
                borderRadius={3} 
                placeholder='johnsmith@gmail.com' 
                marginBottom={5} 
                size='xs' 
                type='email' 
                name='email'
                value={user.email}
                onChange={handleChange}
                />

              <FormLabel color='rgb(163,126,133)' fontSize='xs'>Password</FormLabel>
              <Input 
                padding={3} 
                borderRadius={3} 
                placeholder='Password' 
                marginBottom={5} 
                size='xs' 
                type='password' 
                name='password'
                value={user.password}
                onChange={handleChange}
                />

              <Button 
                padding={3} 
                borderRadius={3} 
                width='100%' 
                size='xs' 
                color='white' 
                marginBottom={4} 
                backgroundColor='rgb(48,112,240)'
                onClick={register}
                >Sign up</Button>
            </div>

            <div className={style.lineText}><p>or</p></div>
            <Button padding={3} variant='outline' borderRadius={3} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="google" /></span> <a href="https://www.google.com/">Log in the Google</a> </Button>
            <Button padding={3} variant='outline' borderRadius={3} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={10} src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277" alt="microsoft" /></span> <a href="https://www.microsoft.com/en-in/">Log in the Microsoft</a></Button>
            <Button padding={3} variant='outline' borderRadius={3} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="apple" /></span> <a href="https://www.apple.com/">Log in the Apple</a></Button>
            <hr />
            <div className={style.bottomSlide}>
              <Text color='black'>Already have an account?</Text><a href="/login">Log In</a>
            </div>
          </div>
        </div>

        <div className={style.signupContainer_2}>
          <img src="https://us.123rf.com/450wm/allvision/allvision1810/allvision181000082/110120454-hand-holding-a-phone-with-a-cloud-and-personal-data-information-the-concept-of-personal-data-securit.jpg?ver=6" alt="signp banner" />
        </div>
    </div>
    </div>
  )
}

export default Signup