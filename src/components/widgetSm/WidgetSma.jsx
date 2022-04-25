import React from "react"
import "./widgetSma.css"
import {Visibility} from '@material-ui/icons';

export default function WidgetSma() {
    return (
      <div className="widgetSma">
          <span className="widgetSmaTitle"> New Members</span>
          <ul className="widgetSmaList">
              <li className="widgetSmaListItem">
                  <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetSmaImg" />
                  <div className="widgetSmaUser">
                      <span className="widgetSmaUsername">Iyanu Mobolaji</span>
                      <span className="widgetSmaUserTitle">Frontend Dev</span>
                  </div>
                  <button className="widgetSmaButton">
                    <Visibility className="widgetSmaIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmaListItem">
                  <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetSmaImg" />
                  <div className="widgetSmaUser">
                      <span className="widgetSmaUsername">Iyanu Mobolaji</span>
                      <span className="widgetSmaUserTitle">Frontend Dev</span>
                  </div>
                  <button className="widgetSmaButton">
                    <Visibility className="widgetSmaIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmaListItem">
                  <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetSmaImg" />
                  <div className="widgetSmaUser">
                      <span className="widgetSmaUsername">Iyanu Mobolaji</span>
                      <span className="widgetSmaUserTitle">Frontend Dev</span>
                  </div>
                  <button className="widgetSmaButton">
                    <Visibility className="widgetSmaIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmaListItem">
                  <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetSmaImg" />
                  <div className="widgetSmaUser">
                      <span className="widgetSmaUsername">Iyanu Mobolaji</span>
                      <span className="widgetSmaUserTitle">Frontend Dev</span>
                  </div>
                  <button className="widgetSmaButton">
                    <Visibility className="widgetSmaIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmaListItem">
                  <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetSmaImg" />
                  <div className="widgetSmaUser">
                      <span className="widgetSmaUsername">Iyanu Mobolaji</span>
                      <span className="widgetSmaUserTitle">Frontend Dev</span>
                  </div>
                  <button className="widgetSmaButton">
                    <Visibility className="widgetSmaIcon"/>
                    Display
                  </button>
              </li>
              
          </ul>
      </div>
    )
  }
