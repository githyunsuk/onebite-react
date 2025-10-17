import './App.css';
import { Products } from './Products';
import { Cart } from './Cart';
import { ConfirmCart } from './ConfirmCart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
      <ConfirmCart cart={cart} />
    </div>
  );
}

export default App;
