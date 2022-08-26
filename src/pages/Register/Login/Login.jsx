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

            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Email</FormLabel>
            <Input padding={3} borderRadius={3} placeholder='johnsmith@gmail.com' marginBottom={3} size='xs' type='email' />
            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Password</FormLabel>
            <Input padding={3} borderRadius={4} placeholder='Enter your password' marginBottom={5} size='xs' type='password' />
            <Button padding={3} borderRadius={4} width='100%' size='xs' color='white' marginBottom={4} backgroundColor='rgb(48,112,240)'>Log in</Button>
            <div className={style.lineText}><p>or</p></div>

            <Button padding={3} variant='outline' borderRadius={4} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="google" /></span> <a href="https://www.google.com/">Log in the Google</a></Button>
            <Button padding={3} variant='outline' borderRadius={4} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={10} src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277" alt="microsoft" /></span> <a href="https://www.microsoft.com/en-in/">Log in the Microsoft</a></Button>
            <Button padding={3} variant='outline' borderRadius={4} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="apple" /></span> <a href="https://www.apple.com/">Log in the Apple</a></Button>
            <hr />
            <div className={style.bottomSlide}>
              <a href=""><Text>Can't Log In?</Text></a>
              <a href=""><Text>Sign Up</Text></a>
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