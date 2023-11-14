import React from 'react';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal} = useCart();
  const total = calculateTotal();

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.cartHeader}>Your Cart</h1>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul className={styles.cartList}>
      {cartItems.map(item => (
  <li key={item.id} className={styles.cartItem}>
    <span className={styles.cartItemName}>{item.name}</span> - 
    <span className={styles.cartItemPrice}>${item.price}</span>
    <span> x {item.quantity}</span>
    <button 
      onClick={() => removeFromCart(item.id)} 
      className={styles.removeButton}
    >
      Remove one
    </button>
  </li>
        ))}
      </ul>
      <p className={styles.totalPrice}>Total: ${total.toFixed(2)}</p>
      <div>
        <Link href="/checkout">
          <div className={styles.checkoutButton}>Proceed to Checkout</div>
        </Link>
        <Link href="/">
          <div className={styles.continueShopping}>Continue Shopping</div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
