import React, { useState } from 'react';
import './SizeGuide.css';

const SizeChart = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
  const measurements = [
    { name: 'CHEST', values: [32, 34, 36, 38, 40, 42, 44, 46] },
    { name: 'UNDER BUST', values: [25, 27, 29, 31, 33, 35, 37, 39] },
    { name: 'SHOULDER', values: [13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17] },
    { name: 'ARMHOLE', values: [14, 15, 16, 17, 18, 19, 20, 21] },
    { name: 'BICEP', values: [9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5] },
    { name: 'ELBOW', values: [9.25, 10, 10.75, 11.5, 12.25, 13, 13.75, 14.5] },
    { name: 'WRIST', values: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5] },
    { name: 'HIGH WAIST', values: [25, 27, 29, 31, 33, 35, 37, 39] },
    { name: 'MID WAIST', values: [27, 29, 31, 33, 35, 37, 39, 41] },
    { name: 'LOW WAIST', values: [29, 31, 33, 35, 38, 40, 42, 44] },
    { name: 'HIP', values: [36, 38, 40, 42, 44, 46, 48, 52] },
  ];

  const handleMouseEnter = (rowIndex, colIndex) => {
    setHoveredRow(rowIndex);
    setHoveredCol(colIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
    setHoveredCol(null);
  };

  return (
    <div>
        <h5 className='sizechart'>BODY MEASUREMENT SIZE CHART</h5>
    <div className="size-chart-container">
       
      <table className="size-chart-table">
        <thead>
          <tr>
            <th>SIZE</th>
            {sizes.map((size, index) => (
              <th key={index}>{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement, rowIndex) => (
            <tr
              key={rowIndex}
              className={hoveredRow === rowIndex ? 'highlight-row' : ''}
            >
              <td className='measurement'>{measurement.name}</td>
              {measurement.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={`size-chart-cell ${
                    hoveredCol === colIndex ? 'highlight-col' : ''
                  }`}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
    <img className='img1' src='https://cdn.kiwisizing.com/baise-gaba-official-1714628445867.png'></img><b/>
    </div>
    <div >
    <iframe className='video' src='/video.mp4'></iframe><b/>
    </div>
    <div>
    <img className='img2' src='https://cdn.shopify.com/s/files/1/0469/8996/7520/files/Size_Chart_73757e1b-9817-4a01-84fb-8500aadca21a_480x480.png?v=1718108376'></img>
    </div>
    </div>
  );
};

export default SizeChart;
