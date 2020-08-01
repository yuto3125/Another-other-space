import React from 'react';
import ColorBox from './components/ColorBox';
// import ColorContext from './contexts/Color';
import { ColorProvider } from './contexts/Color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
