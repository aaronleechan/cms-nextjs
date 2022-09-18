import { getSession, useSession } from 'next-auth/react';
import Layout from '../components/layout/Layout';
import ResturantProfile from '../components/resturant/resturantProfile'
import { GetServerSideProps } from 'next';

export default function Home(){
  return(
    <Layout>
      <ResturantProfile/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {



  // const queryClient = new QueryClient();
  const session = await getSession(context);
  console.log({" This is getServerSideProps session ": session });
  // await queryClient.prefetchQuery('products', getProducts);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: getEnv('NEXTAUTH_CALLBACK_URL'),
  //       permanent: false,
  //     },
  //     props: {
  //       dehydratedState: dehydrate(queryClient),
  //     },
  //   };
  // }

  return {
    props: {
      // session,
      // dehydratedState: dehydrate(queryClient),
    },
  };
};