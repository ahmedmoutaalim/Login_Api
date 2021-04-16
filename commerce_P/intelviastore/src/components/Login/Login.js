import React, {useState,Component} from "react";
// import logo from './logo.svg';

import {useSpring, animated} from 'react-spring';




function App() {


const LoginSubmit = { };

const [registrationFormStatus , setRegistrationFormStatus] = useState(false);

const loginProps = useSpring({
left : registrationFormStatus ?  -500: 0 ,

})
const registerProps = useSpring({
left : registrationFormStatus ? 0 : 500 ,
})

const loginBtnProps = useSpring({borderBottom :registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #1059FF'})

const registerBtnProps = useSpring({borderBottom :registrationFormStatus ?  'solid 2px #1059FF'  : 'solid 0px transparent'})


  function registerClicked(){ setRegistrationFormStatus(true)}
  function loginClicked(){ setRegistrationFormStatus(false)}

  return (
<div className="container">
        <div className="intelvia-wrapper">
            <div className="nav-buttons">
              <animated.button style={loginBtnProps} onClick={loginClicked } id="loginBtn" class="active">Login</animated.button>  
              <animated.button style={registerBtnProps} onClick={registerClicked } id="registerBtn">Register</animated.button>
            </div>
            <div className="form-group">
            <animated.form action='' id='loginform'style={loginProps} ><LoginForm/></animated.form> 
            <animated.form action='' id='registerform'style={registerProps} ><RegisterForm/></animated.form> 
            </div>
            <animated.div className="forgot-panel" style={loginProps} id="forgot-panel">
              <a href="#">Forgot your password </a>
            </animated.div>
        </div>
    </div>
  );
}

function LoginForm(){


    const [Username , setfullName] = useState('');
    const [ Password , setpassword ] = useState('');

    const  login = () => {
  

        console.log({Username , Password})
        


return fetch('http://localhost:51858/api/authenticate/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Username , Password})
      })
        .then(data => data.json()).then(data => console.log(data))
    }

  return(
    
    

      <React.Fragment> 
      <label for='username'  >USERNAME</label>
      <input type='text' id='username' value = {Username} onChange={name => setfullName(name.currentTarget.value)} />
      <label for='password'  >PASSWORD</label>
      <input type='text' id='password' value={Password} onChange={pass => setpassword(pass.currentTarget.value)}  />
      <input onClick={login}  value='submit' className='submit'/>
      </React.Fragment>
   
  )
}

//8888888888888888888888888888888888888888888888888888888888888888888888888888888888
function RegisterForm(){

    const [Username , setfullName] = useState('');
    const [Email , setemail] = useState('');
    const [ Password , setpassword ] = useState('');


const  register = () => {
return fetch('http://localhost:51858/api/authenticate/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Username ,Email ,Password})
      })
        .then(data => data.json())
    }

return(
<React.Fragment>
      <label for='fullname'>FULL NAME</label>
      <input type='text' value = {Username} onChange={name => setfullName(name.currentTarget.value)} id='fullname'/>
      <labe for='email'>Email</labe>
      <input type='email' value={Email} onChange={email => setemail(email.currentTarget.value)} id='email'/>
      <label for='password'>PASSWORD</label>
      <input type='password' value={Password} onChange={pass => setpassword(pass.currentTarget.value)} id='password' className="password"/>
      <label  type='password' for='confirmationpassword'>CONFIRMATION PASSWORD</label>
      <input type='text'  id='confirmationpassword'/>
      <input  onClick={register} value='submit' className='submit'/> 
 </React.Fragment>

  )
}
  
export default App ;