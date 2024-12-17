import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount } from '../features/cart/cartSlice';
import { CartIcon, ChevronUp, ChevronDown } from '../constants/icons';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className='cart-container'>
      <h2>음원 장바구니</h2>
      <CartIcon />
      <div className='cart-items'>
        {items.map((item) => (
          <div key={item.id} className='cart-item'>
            <img src={item.img} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.singer}</p>
              <p>{item.price}원</p>
              <div className='amount-controls'>
                <button onClick={() => dispatch(increaseAmount(item.id))}>
                  <ChevronUp />
                </button>
                <span>{item.amount}</span>
                <button onClick={() => dispatch(decreaseAmount(item.id))}>
                  <ChevronDown />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>총합: {total}원</h3>
    </div>
  );
};

export default Cart;
