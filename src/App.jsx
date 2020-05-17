import React from 'react';
import {createGlobalStyle} from 'styled-components';
import ControlList from './components/ControlList';

const GolobalStyle=createGlobalStyle`
    *{
        margin: 0;
        font-size:14px;
    }
`;
function App() {
  return (
    <div>
      <GolobalStyle/>
      <ControlList></ControlList>
    </div>
  );
}

export default App;
