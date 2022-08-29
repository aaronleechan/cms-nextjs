import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${process.env.GRAPHQL}`);

  const { products } = await hygraph.request(
    `
      {
        products {
          name
          price
          image{
            id
          }
        }
      }
    `
  );

  return {
    props: {
      products
    },
  };
}


const Home = (props: any ) =>{
  return(
    <div>
      <h1>This is Home Page</h1>
    </div>
  )
}

export default Home;