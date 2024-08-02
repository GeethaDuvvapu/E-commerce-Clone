
import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { MdDelete } from 'react-icons/md';

const CartPart = () => {
  const { cartItems, incrementCount, decrementCount } = useContext(CartContext);

  return (
    <div className='cart-part'>
      {cartItems.length === 0 ?(
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={item.id} className='cart-item'>
            <img src={item.image} alt={item.name} />
            <div className='item-details'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>${item.price.toFixed(2)}</span>
            </div>
            <div className='item-count'>
              <button onClick={() => decrementCount(item.id)}>-</button>
              <span>{item.count}</span>
              <button onClick={() => incrementCount(item.id)}>+</button>
            </div>
            <MdDelete onClick={() => removeFromCart(item.id)} />
          </div>
        ))
      )}
    </div>
  );
};

export default CartPart;

