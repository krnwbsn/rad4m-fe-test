import React, { useState } from 'react';
import ColorBox from '../ColorBox';

interface IData {
  id: number;
  colorName: string;
  hexcode: string;
  saturation: number;
  category: string;
}

interface IProps {
  data: IData[];
}

const ColorList: React.FunctionComponent<IProps> = ({ data }) => {
  const [search, setSearch] = useState<IData[] | null>([]);

  const filter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    if (value === '') {
      setSearch([]);
    } else if (value !== '') {
      const getData = data.filter((result: any) => result.category.toLowerCase() === value);
      setSearch(getData);
    }
  }

  const check = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    if (search && search.length > 0 && !checked) {
      setSearch([]);
    } else if (search && search.length > 0 && checked) {
      const getData = (search && search.length > 0 ? search : data).filter((result: any) => result.saturation <= 60);
      setSearch(getData);
    }  
  }

  const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearch([]);
  }

  const colors = (
    (search && search.length > 0 ? search : data).map((result: any) =>
      <ColorBox
        key={result.id}
        hexcode={result.hexcode}
        colorName={result.colorName}
      />
    ))

  return (
    <div
      style={{
        textAlign: 'left',
        padding: '10px'
      }}>
      <div>
        <form
          style={{
            marginLeft: '10px',
          }}
        >
          <label>
            Select the color category: {' '}
          </label>
          <select
            style={{
              width: 'auto'
            }}
            onChange={filter}
          >
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="brown">Brown</option>
            <option value="gray">Gray</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
          </select>
          <input
            style={{
              marginLeft: '20px'
            }}
            type="checkbox"
            onChange={check}
          />
          <label>
            Darker
          </label>
          <button
            style={{
              marginLeft: '20px'
            }}
            onClick={reset}
          >
            Reset
          </button>
        </form>
      </div>
      <div
        style={{
          display: 'flex',
          width: '640px',
          textAlign: 'center',
          flexWrap: 'wrap'
        }}
      >
        {colors}
      </div>
    </div>
  )
}

export default ColorList;