import React from 'react';
import Loyout from './components/Loyout/Loyout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
function App() {
  return (
    <div>
      <Loyout>
        <BurgerBuilder />
      </Loyout>
    </div>
  );
}

export default App;