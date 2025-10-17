import { CartItem } from './CartItem';

export const Cart = ({ cart, setCart }) => {
  const handleDeleteFromCart = (pid) => {
    const updatedCart = cart.filter((product) => product.pid !== pid);
    setCart(updatedCart);
  };

  const handleChangeQuantity = (pid, qty) => {
    const changedCart = cart.map((product) => {
      if (product.pid === pid) return { ...product, qty: Number(qty) };
      return product;
    });
    setCart(changedCart);
  };

  return (
    <>
      <h3>장바구니</h3>
      <table
        style={{
          width: '500px',
          textAlign: 'left',
          whiteSpace: 'nowrap',
        }}
      >
        <thead>
          <tr>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <CartItem
              key={product.pid}
              cartProduct={product}
              handleDeleteFromCart={handleDeleteFromCart}
              handleChangeQuantity={handleChangeQuantity}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
