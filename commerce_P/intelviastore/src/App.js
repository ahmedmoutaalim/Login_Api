import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';

function App() {

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
  return(
    
      <React.Fragment>
      <label for='username'>USERNAME</label>
      <input type='text' id='username'/>
      <label for='password'>PASSWORD</label>
      <input type='text' id='password'/>
      <input type='submit' value='submit' className='submit'/>
      </React.Fragment>
   
  )
}

function RegisterForm(){
  return(
<React.Fragment>
      <label for='fullname'>FULL NAME</label>
      <input type='text' id='fullname'/>
      <labe for='email'>Email</labe>
      <input type='text' id='email'/>
      <label for='password'>PASSWORD</label>
      <input type='text' id='password'/>
      <label for='confirmationpassword'>CONFIRMATION PASSWORD</label>
      <input type='text' id='confirmationpassword'/>
      <input type='submit' value='submit' className='submit'/>
 </React.Fragment>
  )
}

export default App;
