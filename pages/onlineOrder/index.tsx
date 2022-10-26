import { Box, makeStyles } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Checkout from '../../components/cart/Checkout';
import { ClientHeader } from '../../components/layout/clientHeader/clientHeader';
import ProductItem from '../../components/productItem';
import GlobalShopState from '../../context/GlobalShopState';
import { menuItemsQuery } from '../../graphqlQuery/resturant_items';

export async function getServerSideProps({ params }: any) {
  const hygraph = new GraphQLClient(`${process.env.GRAPHQL}`);
  const { items } = await hygraph.request(menuItemsQuery);
  return {
    props: {
      items,
    },
  };
}

const useStyles = makeStyles({
  productItemBox: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface imageInterface {
  url: String;
}

interface itemInterface {
  id: String;
  mealTime: String;
  name: String;
  otherName: String;
  regularPrice: Number;
  image: imageInterface[];
}

const onlineOrder = ({ items }: any) => {
  const [openCheckout, setOpenCheckout] = useState(false);
  const classes = useStyles();

  const handleCheckoutChanges = () => {
    setOpenCheckout(!openCheckout);
  };

  return (
    <GlobalShopState items={items}>
      <Box>
        <ClientHeader updateCheckout={handleCheckoutChanges} />
        <Checkout
          openCheckout={openCheckout}
          setOpenCheckout={setOpenCheckout}
        />
        <Box className={classes.productItemBox}>
          <ProductItem />
        </Box>
      </Box>
    </GlobalShopState>
  );
};

export default onlineOrder;
