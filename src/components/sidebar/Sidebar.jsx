import React from 'react';
import "./sidebar.css"
import{LineStyle, Timeline, TrendingUp,Person,Contactless,Assessment,EmailOutlined,CommentOutlined,ChatBubble,WorkOutlineOutlined,Report} from '@material-ui/icons';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTittle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
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
                    <li className="sidebarListItem active">
                        <Person className="sidebarIcon"/>
                        User
                    </li>
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon"/>
                        Product
                    </li>
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
                    <li className="sidebarListItem active">
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
                    <li className="sidebarListItem active">
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
