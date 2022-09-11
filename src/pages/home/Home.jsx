import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home