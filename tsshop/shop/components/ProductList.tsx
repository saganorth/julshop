import React from 'react';
import { Product } from '../models/product';
import styles from '../styles/ProductList.module.css'; 
import Link from 'next/link'; 

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    console.log('Products:', products); 

    if (!products || products.length === 0) {
      return <p>No products found!</p>;
    }

    return (
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Link href={`/products/${product.id}`}>
              <div>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  

export default ProductList;
