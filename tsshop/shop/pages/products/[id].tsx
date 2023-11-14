
import { GetServerSideProps, NextPage } from 'next';
import { Product } from '../../models/product';
import ProductDetails from '../../components/ProductDetails';


type Props = {
  product: Product;
};

const ProductPage: NextPage<Props> = ({ product }) => {
  return <ProductDetails product={product} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    console.log(context); 
    const { params } = context;
  
    if (!params || !params.id) { 
      return {
        notFound: true,
      };
    }
  
    const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
    if (!res.ok) {
      return {
        notFound: true,
      };
    }
  
    const product: Product = await res.json();
  
    return {
      props: {
        product,
      },
    };
  };
  
export default ProductPage;
