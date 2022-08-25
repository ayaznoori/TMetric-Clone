import React from 'react'
import style from '../Login/Login.module.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button
} from '@chakra-ui/react'

const Login = () => {
  return (
    <div className={style.loginContainer}>
      <div  className={style.loginContainer_1}>
         <div className={style.loginContainer_2}>
            <img style={{width:'120px', margin:'auto', marginTop:'20px'}} src="https://roi4cio.com/fileadmin/user_upload/tmetric_logo.png" alt="logo" />
            <p>Login into Tmetric</p>
         </div>
         <div className={style.loginContainer_3}>
         <FormControl >

            <FormLabel fontSize='xs'>Email</FormLabel>
            <Input borderRadius={5} placeholder='johnsmith@gmail.com' marginBottom={5} size='xs' type='email' />
            <FormLabel fontSize='xs'>Password</FormLabel>
            <Input borderRadius={5} placeholder='Enter your password' marginBottom={5} size='xs' type='password' />
            <Button padding='4' width={320} size='xs' color='white' marginBottom={4} backgroundColor='rgb(48,112,240)'>Button</Button>
            <div className={style.lineText}><p>or</p></div>

            <Button padding='4' width={320} size='xs' color='gray' marginBottom={4} colorScheme='gray'>Log in the Google</Button>
            <Button padding='4' width={320} size='xs' color='gray' marginBottom={4} colorScheme='gray'>Log in the Microsoft</Button>
            <Button padding='4' width={320} size='xs' color='gray' marginBottom={4} colorScheme='gray'>Log in the Apple</Button>
            <hr />
            <div className={style.bottomSlide}>
              <a href="">Can't Log In?</a>
              <a href="">Sign Up</a>
            </div>
          </FormControl>
          </div>
      </div>
      <div className={style.privacy}>
            <a href="">Privacy Policy</a>
          </div>
    </div>
  )
}

export default Login