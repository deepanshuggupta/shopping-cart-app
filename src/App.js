import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { ProductList } from './components/ProductList'
import { ProductReducer } from './reducers/ProductReducer'
import { Provider } from 'react-redux';

import { data } from './staticData'

function App() {

  let store = createStore(ProductReducer);
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ProductList products={data} /> */}
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
