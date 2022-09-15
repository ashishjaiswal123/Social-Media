import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import {useSelector} from 'react-redux'

const ProfileCard = () => {
    const {user} = useSelector((state)=> state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const ProfilePage = false
  return (
    <div className="profileCard">
        <div className="profileImages">

            <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />

            <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
        </div>

        <div className="profileName">
            <span>Abhinav Singh</span>
            <span>Senior Lead Developer</span>
        </div>

        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>380</span>
                    <span>Following</span>
                </div>

                {ProfilePage && (
                    <>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr/>
        </div>
        
        {ProfilePage ? '' : <span> My Profile </span>
        }
    </div>
  )
}

export default ProfileCard