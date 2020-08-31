import React from 'react';
import data from './data/colors.json';
import { ColorList } from './components';

function App() {
  return (
    <div className="App">
      <ColorList data={data} />
    </div>
  );
}

export default App;
