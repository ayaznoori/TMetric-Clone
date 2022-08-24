import React from 'react'
import style from '../Login/Login.module.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text
} from '@chakra-ui/react'

const Login = () => {
  return (
    <div className={style.loginContainer}>
      <div  className={style.loginContainer_1}>
         <div className={style.loginContainer_2}>
            <img style={{width:'150px', margin:'auto', marginTop:'20px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZcAAAB8CAMAAACSTA3KAAABBVBMVEX///8hJSkXwi4Asv//T0I0OT3U1dUAAAj8/PyOkJEeIib8/P34+fkOFRobHyQAAADs7e4ACRHOzs/y8vMvMzZnaWxIS00UGR63uLl0dngAr//d3+FDRkno6evi4+XDxMUmLDEAvxj/STupq6z/QzQAvhDq+P/1/Pbj9+UJEBdfYWT/7exUVlj/gnrw+vE8yk3/ZFm768GL3JNc0GiJi40zyUb/6uja9N1+gIL/Wk6xsrOhoqP/PCv/i4Sm5K1Lwf9514OAzv8iuv//p6Lg9P9Xz2Ow6LfM8NBu1Xkfxjid4aSG24//zcr/aV7/3Nr/d27/sav/lI3/v7um3//C6f9+0/9fyP+OcYtSAAAPiElEQVR4nO2dCVfbuBbH7RYHJ16Ik4ADJiEhhdaUKW1Jp7zSaaFDt+ks7w0t3/+jPEuyZC1Xjh2ScGbQ/3TmtLFsK/rlLrqSE8syMjJautxcd90Po1yu6+E/VF7+31336x6LgPAhEVJ33cH7KDTyGEEXqc2E/9klcLI2d93N+6UcCiWSc/ByTBSPQbNaZYNNAWSDD42765ODCI1n/NlKhEMKgeKXNvS7uSmZULN0uTmV9mAGFCK/y8gsvWv3WZRKu1t1nF1DZunKYjihUsVUCvmEjIkzy5HrefNQQfKpzSyhW/ddxFiyAZ7r7O6g3cWzzQX36t7LvQ0VJELGgFmoiA9rD+q7sELImRkwCxXyYVlkmd9YiLoDNA01UWZRQvP7WxoLkY98mQkyCxIJLQvAkoMxvmwhyiP+zLF8jDTzYibILEg5lpIWj5+9fvfy4uNJpo+nFy/ffX5WhseAWYgwloEey5N3Fyfjg/F4/IAo+9vB+OTi0zPtGQbMAlSO5fGL04IIr+zVUy0aDMZkZbeR65U4sScXDyAmjM2Db0/gE43F3FYeTpDBQ08uQEsRreYCJoPAGIOZX2g6CWN5/G0mFULmG5QDuAMD5hZyXd285cXXKlSIN/sEnO8hMMaTzSeCBSi+PDs9qEgFgXlF43/Tae3287/7qCRjwMwlT5OKfS4N9zKWE+rIjmzHcYJJ/i+0EO17q3or/ya5muDysoax8FhGDpJNQRtPNp90weXLrbA4NvNkQwNmHqEUGQgupzV8GIflOMfijKgjQ1V/3zWerKZQaX+gerE5sVBrcZwwYdcynmwOoQnlUPFiX26LxZ4WF8OezHCpJdhcXtbDkifIXoFldMSjRjmZMZhaciFzeVEv5OdYXB6LQMEYTF1hc5GnLk/01oKK+19fnXwtKv4Flk0dlizCGIOpJzC6vNJBOXhw8ek1Kne57rPPv128GnNY/BIsxmBqCowu32BzGT94+VkcWvfF6UElLMZgagoyl9dwcBl/g5a/nlTDkk8uF97/f6nACsxHkMpHzdIX0SwslmW41BDiIk/1wVxs/FvpdWZjwamyWYipKJwkS4N1AmD5+rn0MhCWn3+RYpExGKak0T9vNs/7jSF8HIr6kLl8fV16my6A5enzt7+LrYYDLZfGTPHtdHtDuuQw+zgk1S85V7tE0xHWAD7emG7Z61EaBGkUjY4mUKPMjbWHkhuDoss8WPb3fxKbtYdtjSNznY31cm2QhiFqt7Gl2T19hI/GbeHf2isGJNuJZ9x6I8Vd9oEuxs7x2R7Ql17edOMN0MnOURqELTtXK4xGZ4nSCJjrf1bNZVzuxDRY1tYe/Sy002dk7lZolyvK3zF+Q+k22I9mit9pj3HZjEuu2BqR9z1qlTTC7VxtF1thEO02lQ/8bt406stHrGQzkjvVCsKmPH9EUV9ycRfK3GVGyIew/IywrD36VWw51EX+mlzs6By4yJvIXjUXpDBy9qSe6LlMYqhLrehYhICzMTG8PAYS5NIkiseymXPH1rK2tv+HeKZ2almXSyuQhyLz2kF+rCaX3i25IDLSx0THxZuua24W9zrCeCA3JjrIF+pUv3TeAmL5D8aSGcyfYtvMkXmQI6vLxQ5t2Sd3e/klVm0vqMm6CEbH5Wxde4nQbvDjkXFJRN+muLHxyxIq5VhkR+YnmgBTm4sdy7H/mDJYvb0g++VHVcelqcdi2+ubIhcpvDxWK5Zl5uKXYlnb/0tsnmgcWX0ucuw/i9gYAVyCknystr2k5Pws0S06HR/N5tLnsLTCNI2jiF2hlZ7xw+IpXJ7I2dj42/xYMj0V2usCv7sVh0xcDlloQ+ZiR03uAm82irescgmmjQ4g0pFR2GLiBo4ptEUuwTk5u38+3Y3YGRFvMCCXtl1cPgiPz7Ppzd7USXHTMJ5wLXHYH4ph/5Psxg5KzGU2FinADIYaLpu7W0x07Fu94rUtR+Fip8W7bhRYIC7pRLkjN4hOoRG9yIh70RG5REWE9t7Y9AMfTPlLQlzOAtbDaJtGR3/iZH2MHSHqZ1yysC9m30qF/4TfdCwO6Wwsa4/+K5yR3a07s0TWzN9ADMxSeC4ttq+ja/Mv1+TSLeRPY3prl3uZvHWAS+YAqI2Fx1yYhrg0Ckcb8N3pbqbpsVRxAdKxU70bcyebR1OOon80E8va/v/EMahSIqvKxQ6dvO9bfHyvy4XXVH9rmIs1SfO72tzYQly2WV4SSMaxuS2PCFp7SQQuStgfv2Dnb4e93shhfhTCYv3+dk3kIpZiurqEjFdlLnZAcpgi5q+ey5CGw3UucQe4FNElgooz0r2UNPmZnIwdsKWw8xZC0BvlYFwIi/VU5iLOLLWJMq/qXOwIeXUu5q+eC+vROvcywIUlY2LmBgulyYkwTM+U4hgNL/5xL6eAPxgCFm7s1yQ9FxIyN6mwyF+DC/rwdUQsq+bi5D2KuAoEwIW5sVSY6cDCXIRhUtJkFva7lAsBo8Fi/SFx+Y/AxUv0pX6mOlxa8Z48/7gre+HGW+Xi07NDp0I3KnA5ZYe2KRenNSz2IEtYrL/2JTBiSXnRXLKcU3kFmFemG4J2dbe+RXyJuHmgymVAPz0BP+vSqYIfK7h0QpbQ93TWYlm/SFz2l8xF1ew6THisu3V9Lud5PhbucvmTymVIJy+pWnBVpdqLwuVjcWzCgWFY5Cgmc1mWvah1G1bSWCUXNisRzgC40HZSkgwL4FI2reTAMGuRL/mTzGU58SXcZrNn+kHcvAMuE1a359OxZXCR07FX/HRfBqNisf6QuCwp7kedpjBpydLPJFgNl3j65k2/39/rnx+tp8Xt+bYAF9qTqLIfE+Yvj7/K80rh2e9JPAOLJZuLmCf7i+KyvidN8kO3UcIlWGDct4OIKC18aSuaUedncT+FVlqVeylcXHnTxYG4tM+DgbAo80qx0N9dIJchXxTbSKwSLkFzMOQFf3uEVZELoI1Z62JFnqy1Vf5eiItYH5OXxeRVsQIMhMX6+5HE5Rfh8MLqMBkXfj0DrReWcFno/AXCMhXbls0rY+2HgrsXqsOI7ZTHkU6lcygYEIuaJosLlu1FzfcRF4uFGFwnuzsuMhaIy4T19Wx2N/Ce8RnrL2N5rzgBA2NxJXNZeyRu7RsulIubrx2HeEX4rrjIi/sWyGUQs7rl7EIM5iKuVyoTGHWTUn+UdfwMHF3Zjck7yJJF1fkxF2tAQgwpgdwRl1ZPHWeozs9ykLAn7UyYKL3D6y/ixhJ1ff+V8m083X5fs632eXk6hrnMfAamOhdrD4WYiLyvlXEh6/ssTY/VzBfi0mHRMN4VwEyCSPaDeBesWIgB9sO8sKpKMRcp7PuNgW4nLKcaXNAWk3wRZmVcgnO0WaDBVhdasWIwEBfviOX18Yjzb9tBy06PpC2bnpqQqfvHTmZ+wyjt+nMJy9qjv4UGJE1enB9Dyw2pkyf6JVzisn0XvOrM988pmLAnp1jg+n7CIgzaXzlJur4/6ExH+I6BI7LFibK031LdBlu6gYzTr7K5yNthBkmVR2DqcLHadJ2ujEvpPiVeteow23S2Hx9LEQPep3TO7VMKI9vZ3e2lAa0rtYSmQICxvshcHhyU7+an+vOtTEXe0J9Ueva1FheLQSjjAonu6+NVrz7GKg6plJxq9vVt86WjVovbkYVMiF8AwFwaM/bzj79Uc2RPf5qRJXuNJXBhWj2X7oimAlLk1nDxNyOlF6w3Kd8W7xuXn645kbFU/r0kGcxz8cx2JTf2z+FiNVI2KREyC93+ZH9btxM2DMWmmIuU9L4bz4dFASNtHrOSKtWxfxKXohTUErJl7XMWbjMCZ0GBtLEvd2TiyAs15fFFnSdVRTBijT93Y/8qLkUpqGWXru8z7TnKwneWBGzLGR0J/JIj4wxmfEFfPLxS7lHo6pBejwMjm0s70T7HJ2i6EWCtA1xGKTm2AXDJT0vZ1wRaR+uBXmkL4EJvrVaZ/N0IuvU2vUU0KtyOQ5uqXKxu01kXAn4cbanN8HOviZSRuV8BLO93rtWb5Md+7NwwM2Bg9qXokrux2Vz2pk2sKbABrplrqj6SOJjSgyxrnbCXQKldKbm1ew7e2mdX485hTcFSWLd/PIrSOAzjOIhSZ3MP+hZeKCNjTyQLWB7uvP8O3cb7/iE7poKRkrFssm++IYZq2DjfPjo+Omv2dc9Wu77fViJ//p1wIpaHD3cyMjLbw2t8KIMmgZFKMKiWXKUIY0REHJlsMHj7hYwFk/lwc32YE/C8w+vLh/kRFYwY9C23oX3q1QgQifxyPpB5MgALQZOxuby8vLl5/yH7O3dAACN7MWtQbbJvlItMLWWDsS4OLuhfDz9wo0/ZCEhUMG+lJ8Sz6FIx6hvlIpFfWVBhxUoVi04cGBlLFumMudSTxmCoqmMRwEgi5mKiSw25JMKoEwKsOlgQGM1NEhNdais3GDCRroclA/MBvEXbJGP1lRtMAxi1ulgQGMCVuZkXM+ZSWwRMA/Bk7+tiycDcqJdJGuaHE+YR/mUx0JPd1LaXH+pF2ijom6/qqy/qyYCc7Fqdp5RR2QFKaFkuNjS/MTaXPH2IuaqTJ98AZN0cizGX+kIGg3IyMFm+fliNzM4HsN6cEC9mrGUeuXmIAfdRHv6o4Mx2HsLrM0OSi5mgP5+oJ4OfAri6LCeTHf1xCJ45MMHldsI/9zpMOprHM9A6iwbNzs7OzbUmegw6iZlR3krkV6v1YDKjQWhEODs7ZEVGdwrCYn65+nYisT8Do9mrj3T4/foSL7tgQB/e31xeX5XkWcRaTHC5nRgYTQmTyjs8vLr6fnU4cwd4YrAsRCgpI2AWMddwDZZFiYJpaFdjqqvbaBgsixIGg9Llju6nCapq0MEJcoXHXYwqyMNgsglmJ7nNxzzzYRSLsZaFCKfLbeTL9AnzTLURFTTLN1gWJg5MQ/NzHjPUbRgsS5CLSjLIlyFnVj/++8iFJQNcqjRYFikEhppMR/3d5FL5w06jMBaDZbHCvoySSap7s27SyV2Y8WFLETUZPJfpNAZVjMYfNHJbIRUxg2UZcslUBtkMNpp2ORq/jU2FUjEubGlys6lMQSZD00BPe0EN/fYQHSZUutiFGR+2RGEyJM7kaJBJZEOfeTksssSJX8ZQKBVjLEsWI4MjTYJ/DlL6Lg/8M44ZFOzAMijGVlYiZBqIDEGD7CbH08iBICTIUoipuGbKsiq5KAPAaDI2GRzpmyIRkjb+7RRjKqtWZgQeZYPpFMp/z8bHUcVQWbnyQI/F/8AQFjl41128t0LBA//xqTz60l13zQjHG89j/7/r7hgZGd1r/R+w/fhzDyhvBwAAAABJRU5ErkJggg==" alt="logo" />
            <br />
            <Text fontSize='2xl'>Login into Tmetric</Text>
         </div>
         <div className={style.loginContainer_3}>
         <FormControl>
            <FormLabel fontSize='md'>Email</FormLabel>
            <Input size='sm' type='email' />
            <br />
            <br />
            <FormLabel fontSize='md'>Password</FormLabel>
            <Input size='sm' type='password' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          </div>
      </div>
    </div>
  )
}

export default Login