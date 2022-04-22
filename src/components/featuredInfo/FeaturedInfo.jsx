import React from 'react'
import "./featuredInfo.css"
import{ArrowDownward, ArrowUpward} from '@material-ui/icons'; 

export default function FeaturedInfo() {
  return (
    <div className='featured'>
          <div className="featuredItem">
            <span className="featuredTittle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">-3.4<ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Comapared to last month  </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTittle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">-11.4<ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Comapared to last month  </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTittle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,195</span>
                <span className="featuredMoneyRate">1.4<ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Comapared to last month  </span>
        </div>
    </div>
  )
}
