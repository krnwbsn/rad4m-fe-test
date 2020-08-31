import React from 'react';
import { IDataColor } from '../../interfaces';
import './styles.scss';

const ColorBox = (props: IDataColor) => {
  const { hexcode, colorName } = props;
  return (
    <div>
      <div
        className="color-box"
        style={{
          backgroundColor: hexcode,
        }}
      ></div>
      <div>{colorName}</div>
    </div>
  );
};

export default ColorBox;
