import React, {useState} from 'react';
import './App.css';

//Make sure to import the color block component here:

import ColorBlock from './ColorBlock';


function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })

  return (
    <div className="App">
        {colors.map((color, i) =>
          <ColorBlock color={color} />
          )}
    </div>
  )
}

export default App;
