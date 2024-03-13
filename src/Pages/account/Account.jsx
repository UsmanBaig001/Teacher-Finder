import './account.scss'
import BannerImg from '../../assets/Backgrounds/bg_Bottom.png'
import ProfileImg from '../../assets/IMG-20210923-WA0002.jpg'
import { Button, Rating } from '@mui/material'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <section className="account-container">
        <div className="img-section">
            <img src={BannerImg} alt="" height={'100%'}/>
        </div>
        <div className="main-content">
        <div className="profile-img">
            <img src={ProfileImg} alt="" width={'100%'} />
        </div>
        <h1>Mr. Uheed</h1>
        </div>
        <div className="profile-details">
            <div className="bio">
                <h2>Intro</h2>
                <div className="education-designation">
                <i class="fa-solid fa-briefcase"></i>
                <span>Senior Frontend Developer ReactJs, ReactNative at Cross Media Sol</span>
                </div>
                <div className="education-designation">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>BSCs</span>
                </div>
                <div className="education-designation">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>Intermediate</span>
                </div>
                <div className="education-designation">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <span>Lahore, Pakistan</span>
                </div>
            </div>
            <div className="posts">
                <h2>Posts</h2>
                <Button variant='outlined' >Create Post</Button>
            </div>
        </div>
    </section>
  )
}

export default Account;