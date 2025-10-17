export const Item = ({ product, handleAddCart }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.desc}</td>
      <td>{product.stock}</td>
      <td>
        {product.stock !== 0 && (
          <button onClick={() => handleAddCart(product)}>담기</button>
        )}
      </td>
    </tr>
  );
};
