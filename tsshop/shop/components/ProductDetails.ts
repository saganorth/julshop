import { NextPage } from 'next';
import { Product } from '../models/product';
import { useCart } from '../context/CartContext';


type ProductDetailsProps = {
    product: Product; 

};

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.stock}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            
        </div>
    );
};

export default ProductDetails;
