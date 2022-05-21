import React, { useState } from 'react';
import './slider.css';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';

export default function SliderBar({ onDataSet }) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  const [data, setData] = useState(1);

  const handleChange = (event, newData) => {
    setData(newData);
    onDataSet(newData);
  };

  return (
    <div className='slider'>
      <Box sx={{ height: 250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          value={data}
          onChange={handleChange}
          orientation='vertical'
          // defaultValue={30}
          aria-label='Temperature'
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </div>
  );
}