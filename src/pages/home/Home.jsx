import React, { useState } from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css"
import{ userData } from "../../dummyData";
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSma from '../../components/widgetSm/WidgetSma';
import VerticalSlider from '../../components/slider/SliderBar';
import ProgressBar from '../../components/progressBar/ProgressBar';

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState(1);

  const getSliderData = value => {
    setSliderValue(value);
  };

  const userDataTransform = userData.map(newUserData);

  function newUserData(month) {
    const newActiveUserValue = sliderValue * month['Active User'];
    const newMonthValue = { ...month, 'Active User': newActiveUserValue };
    return newMonthValue;
  }

  return (
    <div className="home">
        <FeaturedInfo sliderValue={sliderValue}/>
        <div className='slider'></div>
        <div className='chartContainer'>
          <VerticalSlider onDataSet={getSliderData} />
          <Chart data={userDataTransform} title="User Analytic" grid dataKey="Active User"/>
          <ProgressBar sliderValue={sliderValue} />
        </div>
        
        
        <div className="homeWidgets ">
          <WidgetSma/>
          <WidgetLg/>
      
        </div>
    </div>
  );
}
