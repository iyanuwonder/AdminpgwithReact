import React from 'react';
import "./sidebar.css"
import{LineStyle, Timeline, TrendingUp,Person,StorefrontRounded,Contactless,Assessment,EmailOutlined,CommentOutlined,ChatBubble,WorkOutlineOutlined,Report} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTittle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to ="/" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    </Link>
                   
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTittle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            User
                        </li>
                    </Link>
                    <Link to="/products"className="link">
                        <li className="sidebarListItem">
                            <StorefrontRounded className="sidebarIcon"/>
                            Product
                        </li>
                    </Link>
                    
                    <li className="sidebarListItem">
                        <Contactless className="sidebarIcon"/>
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <Assessment className="sidebarIcon"/>
                        Report
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTittle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <EmailOutlined className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <CommentOutlined className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubble className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTittle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutlineOutlined className="sidebarIcon"/>
                        Manage 
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
