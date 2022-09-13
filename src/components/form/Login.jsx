import React from 'react'
import './Form.css'

const Login = ({setIsSignUp}) => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input type="text" placeholder="Username" className="infoInput" name="username"/>
        </div>

        <div>
          <input type="password" className="infoInput" placeholder="Password" name="password"/>
        </div>

        <div>
            <span style={{ fontSize: "12px", cursor: "pointer" }} onClick= {()=> setIsSignUp(true)}>
              Don't have an account Sign up
            </span>
          <button className="button infobtn">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login