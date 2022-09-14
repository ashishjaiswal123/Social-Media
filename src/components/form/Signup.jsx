import React from 'react'
import './Form.css'

const Signup = ({setIsSignUp, handleChange,confirmPass, handleSubmit, resetForm, data,loading}) => {
  return (
    <div className="a-right">
      <form className='infoForm authForm' onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname}/>
          <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname}/>
        </div>
        <div><input type="text" className="infoInput" placeholder='username' name='username' onChange={handleChange} value={data.username}/></div>
        <div>
          <input type="password" className="infoInput" placeholder='password' name='password' onChange={handleChange} value={data.password}/>
          <input type="password" className="infoInput" placeholder='confirm password' name='confirmpassword' onChange={handleChange} value={data.confirmpassword}/>
        </div>
        <div  style={{display: confirmPass ? "none" : "block", color: "red", fontSize: "12px"}}>
            <span>*Confirm password is not same</span>
        </div>
        <div>
          <span style={{fontSize: '12px', cursor: "pointer"}} onClick={()=>{setIsSignUp(false); resetForm()}}>
            Aready have an account. Login!
          </span>
        </div>
        <button className="button infobtn" type='submit' disabled={loading}>{loading? "Loading..." : "Sign Up"}</button>
      </form>
    </div>
  )
}

export default Signup