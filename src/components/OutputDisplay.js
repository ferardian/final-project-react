import React from 'react';

// Hasil output respon API

const OutputDisplay = (props) =>
  <div className="outputDisplay">
    <br/>
    <p className="temp-wrapper">Temperatur Saat Ini:
      <span className="temp">{ props.tempOutput }</span>
      <span className="temp-symbol">&nbsp;°C</span>
    </p>
 
    <p className="cond-wrapper">Kondisi Saat Ini:
      <span className="cond">{ props.condOutput }</span>
    </p>
    <br/>
  </div>


OutputDisplay.defaultProps = {
  tempOutput: 'Belum ada data.',
  condOutput: 'Belum ada data.'
};

export default OutputDisplay;
