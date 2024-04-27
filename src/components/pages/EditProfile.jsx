import { useState } from "react"
import { FaHospitalAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import AddIcons from '../images/addIcons.svg'
import { IoIosCloseCircle } from "react-icons/io";
import Load from './Loading'
import { Link } from "react-router-dom";

const EditProfile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setImageUrl(URL.createObjectURL(file));
    };
    return (
        <>
        <Load/>
            <div className="main-edit-prof-container">
                {/* Reusable Code */}
                <nav>
                    <div className="host-name-left">
                        <h1>Account Details</h1>
                        <div className="host-loc">
                            <p>Hostpital Information</p>
                        </div>
                    </div>
                    <Link to='/Home'>
                    <div className="host-logo-right">
                <IoIosCloseCircle className="icon3"/>
          </div>
          </Link>

                </nav>
                <div className="edit-container">
                    <div className="edit-img-left">
                    <form action=""  method="post" className='form-account-detail'>
                        {/* Edit Profile */}
                        <div className="file-box">
                            {imageUrl ? <img src={imageUrl} alt="Selected Image" /> : <img src={AddIcons} alt="Add Image" />}
                            {!selectedFile}
                        </div>
                        <button type="button" onClick={() => document.getElementById('fileInput').click()}>Upload Image</button>
                        <input
                          type="file"
                          id="fileInput"
                          accept=".jpg, .png, .webp"
                          className="img-file-uploader"
                          onChange={handleFileInputChange}
                          style={{ display: 'none' }} // Hide the default file input
                        />
                        </form>
                    </div>
                    <div className="edit-infor-right">
                        <div className="form-info">
                            <span className='account-title'>Hospital Name</span>
                            <div className="input-cont">
                            <FaHospitalAlt className='input-icon' />
                            <input type="text" className='account-input' placeholder='CMC Hospital' />
                            </div>
                            <span className='account-title'>Address</span>
                            <div className="input-cont">
                            <FaHome className='input-icon' />
                            <input type="email" className='account-input' placeholder='cmchospital@gmail.com' />
                            </div>
                            <span className='account-title'>Calling Number</span>
                            <div className="input-cont">
                            <FaPhoneAlt className='input-icon' />
                            <input type="tel" className='account-input' placeholder='095666754853' />
                            </div>
                            <span className='account-title'>Map Link</span>
                            <div className="input-cont">
                            <FaMapMarkerAlt className='input-icon' />
                            <input type="text" className='account-input-1' placeholder='Princess Limae Store, 55MG+84P, Manila S Rd, Purok 7, Calamba, 4027 Laguna' />
                            </div>
                        </div><br/>
                        <div className="edit-footer">
                <button className="edit-btn-1">Update</button>
                <button className="edit-btn-2">Disgard</button>
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile
