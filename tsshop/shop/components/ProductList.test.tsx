import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { Product } from '../models/product'; 

describe('ProductList', () => {
  it('renders a list of products', () => {
    const products: Product[] = [ 
      { id: 1, name: 'Product 1', price: 10, stock: 10, description:'product description', imageUrl: 'url1' },
      { id: 2, name: 'Product 2', price: 20,stock: 10, description:'product description',  imageUrl: 'url2' }

    ];

    render(<ProductList products={products} />);

    products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', 'url1');
    expect(images[1]).toHaveAttribute('src', 'url2');
  });

  it('displays a message if no products are found', () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText('No products found!')).toBeInTheDocument();
  });
});
