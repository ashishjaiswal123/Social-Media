import React from 'react'
import './Form.css'

const Signup = ({setIsSignUp}) => {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>Sign up</h3>
        <div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
          <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
        </div>
        <div><input type="text" className="infoInput" placeholder='username' name='username'/></div>
        <div>
          <input type="password" className="infoInput" placeholder='password' name='password' />
          <input type="password" className="infoInput" placeholder='confirm password' name='confirmpassword' />
        </div>
        <div>
          <span style={{fontSize: '12px', cursor: "pointer"}} onClick={()=>setIsSignUp(false)}>Aready have an account. Login!</span>
        </div>
        <button className="button infobtn" type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup