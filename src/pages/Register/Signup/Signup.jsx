import React from 'react'
import style from '../Signup/Signup.module.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button
} from '@chakra-ui/react'

const Signup = () => {
  return (
    <div className={style.Container}>
    <div className={style.signupContainer}>
        <div className={style.signupContainer_1}>
        <div className={style.loginContainer_2}>
            <img style={{width:'120px', margin:'auto'}} src="https://roi4cio.com/fileadmin/user_upload/tmetric_logo.png" alt="logo" />
            <p>Create Your Account</p>
         </div>
         <div className={style.loginContainer_3}>
         <FormControl >
            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Name</FormLabel>
            <Input padding={3} borderRadius={3} placeholder='john smith' marginBottom={3} size='xs' type='name' />
            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Email</FormLabel>
            <Input padding={3} borderRadius={3} placeholder='johnsmith@gmail.com' marginBottom={5} size='xs' type='email' />
            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Password</FormLabel>
            <Input padding={3} borderRadius={3} placeholder='Password' marginBottom={5} size='xs' type='password' />
            <Button padding={3} borderRadius={3} width='100%' size='xs' color='white' marginBottom={4} backgroundColor='rgb(48,112,240)'>Sign up</Button>
            <div className={style.lineText}><p>or</p></div>

            <Button padding={3} variant='outline' borderRadius={3} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="google" /></span> <a href="https://www.google.com/">Log in the Google</a> </Button>
            <Button padding={3} variant='outline' borderRadius={3} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={10} src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277" alt="microsoft" /></span> <a href="https://www.microsoft.com/en-in/">Log in the Microsoft</a></Button>
            <Button padding={3} variant='outline' borderRadius={3} width='100%' size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="apple" /></span> <a href="https://www.apple.com/">Log in the Apple</a></Button>
            <hr />
            <div className={style.bottomSlide}>
              <Text color='black'>Already have an account?</Text><a href="">Log In</a>
            </div>
          </FormControl>
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