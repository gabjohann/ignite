import { useRouter } from 'next/router';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis vel
          dolorem labore? Dolor, illum nesciunt excepturi facilis ipsa
          distinctio enim sapiente, cum autem facere voluptas, corporis harum
          quibusdam deleniti sit?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
