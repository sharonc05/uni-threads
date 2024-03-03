import React, { useState } from "react";
import './Profile.css'
import Newsreader from '../../Components/Assets/Newsreader-VariableFont_opsz,wght.ttf';
// Assuming Newsreader is correctly set up in your CSS with @font-face
const fontStyles = {
    fontFamily: "'Newsreader', serif",
};

const Profile = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = URL.createObjectURL(e.target.files[0]);
            setImage(img);
        }
    };

    return (
        <div className='container'>
            <div className='profile-title' style={fontStyles}>
                <h1>Profile</h1>
            </div>
            <div className='profile-picture' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100px', height: '100px', borderRadius: '50%' }}></div>
            <input 
                type="file" 
                onChange={handleImageChange} 
                style={{display: 'none'}} 
                id="fileInput" 
                accept="image/png, image/jpeg" 
                />
            <label htmlFor="fileInput" className="upload-button">Upload Photo</label>
            <div className='School'>
                <button className='button'>School</button>
            </div>
            <div className='Edit-Profile'>
                <button className='button'>Edit Profile</button>
            </div>
            <div className='Message'>
                <button className='button'>Message</button>
            </div>
            <div className='Swap'>
                <button className='button'>Swap</button>
            </div>
        </div>
    );
}

export default Profile