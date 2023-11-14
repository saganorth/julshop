import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../models/product';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products'); 
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'An error occurred while fetching the products.');
        }
        setProducts(data);
      } catch (error: any) {
        setError(error.message || 'Failed to fetch.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


    return (
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.content}>
          
          <ProductList products={products} />
        </div>
        <Footer />
      </div>
    );
  };

export default HomePage;



