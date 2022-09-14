import React from 'react'
import './Form.css'

const Login = ({setIsSignUp, handleChange, handleSubmit, resetForm, data, loading}) => {
  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <div>
          <input type="text" placeholder="Username" className="infoInput" name="username" onChange={handleChange} value={data.username}/>
        </div>

        <div>
          <input type="password" className="infoInput" placeholder="Password" name="password" onChange={handleChange} value={data.password}/>
        </div>

        <div>
            <span style={{ fontSize: "12px", cursor: "pointer" }} onClick= {()=> {setIsSignUp(true); resetForm()}}>
              Don't have an account Sign up
            </span>
          <button className="button infobtn" disabled={loading}>{loading? "Loading..." : "Log In"}</button>
        </div>
      </form>
    </div>
  )
}

export default Login