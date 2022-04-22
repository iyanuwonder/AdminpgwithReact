import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language,Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">MyAdmin page</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>

                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>

                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="img" className="topAvatar" />
            </div>
        </div>

    </div>
  )
}
