export const CartItem = ({
  cartProduct,
  handleDeleteFromCart,
  handleChangeQuantity,
}) => {
  return (
    <tr>
      <td>{cartProduct.name}</td>
      <td>
        <input
          type="number"
          value={cartProduct.qty}
          min={1}
          max={cartProduct.stock}
          onChange={(e) =>
            handleChangeQuantity(cartProduct.pid, e.target.value)
          }
        />
      </td>
      <td>{cartProduct.price * cartProduct.qty}</td>
      <td>
        <button onClick={() => handleDeleteFromCart(cartProduct.pid)}>
          삭제
        </button>
      </td>
    </tr>
  );
};
