export const ConfirmCart = ({ cart }) => {
  const qtySum = cart.reduce((acc, cur) => acc + cur.qty, 0);
  const priceSum = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  return (
    <>
      <h3>구매 금액</h3>
      <div>총 {qtySum}개 상품</div>
      <div>가격: {priceSum}원</div>
    </>
  );
};
