import React, {useState, useRef} from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import {UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/UploadAction'


const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const desc = useRef()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.authReducer.authData)

    const OnImageChange = (event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if(image){
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name", filename)
            data.append("file",image)
            newPost.image = filename;
            console.log(newPost)
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
    }

  return (
    <div className="postShare">
        <img src={ProfileImage} alt="" />
        <div>
            <input ref={desc} required type="text" placeholder="What's happening" />
            <div className="postOptions">
            <div className="option" style={{color:"var(--photo)"}}
            onClick={() =>{imageRef.current.click()}}
            >
                <UilScenery/>
                Photo
            </div>
            <div className="option" style={{color: "var(--video)"}}>
                <UilPlayCircle/>
                Video
            </div>
            <div className="option" style={{color: "var(--location)"}}>
                <UilLocationPoint/>
                Location
            </div>
            <div className="option" style={{color: "var(--shedule)"}}>
                <UilSchedule/>
                Schedule
            </div>
            <button className='button ps-button' onClick={handleSubmit}>
                Share
            </button>
            <div style={{display:"none"}}>
                <input type="file" name='myImage' ref={imageRef} onChange={OnImageChange}/>
            </div>
        </div>
        {image && (
            <div className="previewImg">
                <UilTimes onClick={()=>setImage(null)}/>
                <img src={URL.createObjectURL(image)} alt="" />
            </div>
        )}
        </div>
    </div>
  )
}

export default PostShare