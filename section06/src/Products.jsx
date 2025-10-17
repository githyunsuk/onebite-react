import { productList } from './productList';
import { Item } from './Item';

export const Products = ({ cart, setCart }) => {
  const handleAddCart = (product) => {
    const existIdx = cart.findIndex(
      (cartProduct) => cartProduct.pid === product.pid
    );

    if (existIdx < 0) {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
        },
      ]);
    } else {
      const addedCart = cart.map((cartProduct, idx) => {
        if (idx === existIdx)
          return { ...cartProduct, qty: cartProduct.qty + 1 };
        return cartProduct;
      });
      setCart(addedCart);
    }
  };

  return (
    <div>
      <h2>상품 목록</h2>
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
            <th>가격</th>
            <th>설명</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <Item
              key={product.pid}
              product={product}
              handleAddCart={handleAddCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
