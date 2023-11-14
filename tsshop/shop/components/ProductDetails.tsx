import React from 'react';
import { NextPage } from 'next';
import { Product } from '../models/product';
import { useCart } from '../context/CartContext';
import styles from '../styles/ProductDetails.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Added to cart:', product.name);
  };

  return (
    <div className={styles.pageContainer}>
        <Header />
    
        <div className={styles.card}>
            <h2 className={styles.header}>{product.name}</h2> 
            <img src={product.imageUrl} alt={product.name} className={styles.image} />
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.stock}>In stock: {product.stock}</p>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>
        </div>
        <Footer />
    </div>
  );
};

export default ProductDetails;
