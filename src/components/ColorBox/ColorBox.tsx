import React from 'react';
import { IDataColor } from '../../interfaces';

const ColorBox = (props: IDataColor) => {
  const { hexcode, colorName } = props;
  return (
    <div>
      <div
        style={{
          border: '1px solid #000',
          margin: '10px',
          width: '100px',
          height: '40px',
          backgroundColor: hexcode,
        }}
      ></div>
      <div>{colorName}</div>
    </div>
  );
};

export default ColorBox;
