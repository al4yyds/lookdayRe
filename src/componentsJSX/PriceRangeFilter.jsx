import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './PriceRangeFilter.scss';

const PriceRangeFilter = ({ setPriceRange }) => {
  const [values, setValues] = useState([1000, 5000]);

  const MIN = 0;
  const MAX = 10000;

  return (
    <div className="price-range-filter">
      <h3>價格範圍篩選</h3>
      <div className="slider-container">
        <Range
          values={values}
          step={100}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setValues(values);
            setPriceRange({ min: values[0], max: values[1] });
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', '#548BF4', '#ccc'],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '24px',
                width: '24px',
                borderRadius: '12px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC',
                }}
              />
            </div>
          )}
        />
        <div className="slider-values">
          <span>NT$ {values[0]}</span> - <span>NT$ {values[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
