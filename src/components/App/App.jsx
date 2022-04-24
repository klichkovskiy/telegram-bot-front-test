import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Products from '../Products/Products';

import { PRODUCT } from '../../constants/constants';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/sushi">
          <Products
            category={PRODUCT.sushi}
          />
        </Route>

        <Route exact path='/pizza'>
          <Products
            category={PRODUCT.pizza}
          />
        </Route>

        <Route path="/">
          <div></div>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
