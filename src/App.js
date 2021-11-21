//
//

import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

function App() {
  const shpwCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {shpwCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
