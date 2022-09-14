import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import Login from '../../components/form/Login'
import Signup from '../../components/form/Signup'
import {useDispatch} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
  const [IsSignup, setIsSignUp] = useState(true)
  const dispatch = useDispatch()
  const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpassword: ""})
  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(IsSignup){
      data.password === data.confirmpassword ? dispatch(signUp(data)) : setConfirmPass(false)
    }else{
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setConfirmPass(true)
    setData({firstname: "", lastname: "", password: "", confirmpassword: ""})
  }
  return (
    <div className="auth">

      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Coding Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right side*/}
      {IsSignup ? <Signup data={data} setIsSignUp={setIsSignUp} resetForm={resetForm} confirmPass={confirmPass} handleSubmit={handleSubmit} handleChange={handleChange}/> 
      : 
      <Login data={data} setIsSignUp={setIsSignUp} resetForm={resetForm} handleSubmit={handleSubmit} handleChange={handleChange}/>}
      
    </div>
  )
}

// function LogIn() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Log In</h3>

//         <div>
//           <input type="text" placeholder="Username" className="infoInput" name="userName"/>
//         </div>

//         <div>
//           <input type="password" className="infoInput" placeholder="Password" name="password"/>
//         </div>

//         <div>
//             <span style={{ fontSize: "12px" }}>
//               Don't have an account Sign up
//             </span>
//           <button className="button infobtn">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function SignUp(){
//   return(
//     <div className="a-right">
//       <form className='infoForm authForm'>
//         <h3>Sign up</h3>
//         <div>
//           <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
//           <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
//         </div>
//         <div><input type="text" className="infoInput" placeholder='username' name='userName'/></div>
//         <div>
//           <input type="password" className="infoInput" placeholder='password' name='password' />
//           <input type="password" className="infoInput" placeholder='confirm password' name='confirmPassword' />
//         </div>
//         <div>
//           <span style={{fontSize: '12px'}}>Aready have an account. Login!</span>
//         </div>
//         <button className="button infobtn" type='submit'>Signup</button>
//       </form>
//     </div>
//   )
// }

export default Auth