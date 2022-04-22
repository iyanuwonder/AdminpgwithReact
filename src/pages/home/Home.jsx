import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css"
import{ userData } from "../../dummyData";
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSma from '../../components/widgetSm/WidgetSma';

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytic" grid dataKey="Active User"/>
        <div className="homeWidgets ">
        
        <WidgetSma/>
        <WidgetLg/>
      
        </div>
    </div>
  );
}
