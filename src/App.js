import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AddProduct from './components/AddProduct'

import ProductList from './components/ProductList'

const App = () => (
  <BrowserRouter>
    <AddProduct />
    <Switch>
      <Route exact path="/ProductList" component={ProductList} />
    </Switch>
  </BrowserRouter>
)

export default App
