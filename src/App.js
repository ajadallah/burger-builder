import React from 'react';

import Layout from './hoc/layout/Layout';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
