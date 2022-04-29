import React from 'react'
import './usersin.css'
//import { useParams } from 'react-router-dom'
import{PermIdentity,CalendarToday,PhoneAndroid,Email,Home,Publish} from '@material-ui/icons';
import { Link } from 'react-router-dom';



export default function UserSin() {
    //const { userId }= useParams()

  return (
    <div className="user">
        <div className="userTitleContaner">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" 
                    alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Folake mobs</span>
                        <span className="userShowUserTitle">Transport Manager</span>
                    </div>
                </div>
                <div className="userShowButtom">
                    <span className="userShowTitle">Account Detail</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">Diana26</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">04.06.1995</span>
                    </div>
                    <span className="userShowTitle">Contact Detail</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+44 7 354 7746</span>
                    </div>
                    <div className="userShowInfo">
                        <Email className='userShowIcon'/>
                        <span className="userShowInfoTitle">Diana26@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <Home className='userShowIcon'/>
                        <span className="userShowInfoTitle">1-3 king strt, sheffield</span>
                    </div>
                    
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text"placeholder="Diana26" 
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text"placeholder="Folake mobs" 
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text"placeholder="Diana26@gmail.com" 
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text"placeholder="+44 7 354 7746" 
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text"placeholder="1-3 king strt, sheffield" 
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text"placeholder="Folakemobs" 
                            className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpdate">
                            <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" 
                            alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdsteIcon"/></label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
