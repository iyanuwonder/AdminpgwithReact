import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) =>{
        return  <button className={"widgetLgButton " + type}>{type}</button>;
    }
  return (
    <div className="widgetLg">
        <span className="wigetLgTitle">Latest Transactions</span>
        <table className="widgetLgTable">
            <tbody>
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetLgImg" />
                    <span className="wigetLgName">Iyanu Mobolaji</span>
                </td>
                <td className="widgetLgDate">10 jul 2022</td>
                <td className="widgetLgAmount">£100.00</td>
                <td className="widgetLgStatus">
                    <Button type ="Approved"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetLgImg" />
                    <span className="wigetLgName">Iyanu Mobolaji</span>
                </td>
                <td className="widgetLgDate">10 jul 2022</td>
                <td className="widgetLgAmount">£100.00</td>
                <td className="widgetLgStatus">
                    <Button type ="Declined"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetLgImg" />
                    <span className="wigetLgName">Iyanu Mobolaji</span>
                </td>
                <td className="widgetLgDate">10 jul 2022</td>
                <td className="widgetLgAmount">£100.00</td>
                <td className="widgetLgStatus">
                    <Button type ="Pending"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" className="widgetLgImg" />
                    <span className="wigetLgName">Iyanu Mobolaji</span>
                </td>
                <td className="widgetLgDate">10 jul 2022</td>
                <td className="widgetLgAmount">£100.00</td>
                <td className="widgetLgStatus">
                    <Button type ="Approved"/>
                </td>
            </tr>

            </tbody>
          
        </table>
    </div>
  )
}
