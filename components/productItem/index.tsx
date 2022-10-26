import { Box, Button, Divider, Grid, makeStyles } from '@material-ui/core';
import { AttachMoney } from '@mui/icons-material';
import { useContext } from 'react';
import shopContext from '../../context/shop-context';
import CustomImageList from '../imageList';

const useStyles = makeStyles({
  productBox: {
    width: '250px',
    ['@media (min-width:780px)']: {
      width: '600px',
    },
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    fontSize: 'medium',
    display: 'flex',
  },
  count: {
    marginTop: '10px',
  },
  cartButtonStyle: {
    width: '100%',
  },
  titleStyle: {
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'initial',
  },
  priceStyle: {
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'initial',
  },
  dividerStyle: {
    width: '100%',
    height: '1px',
  },
  itemGrid: {
    width: '250px',
    height: '250px',
    marginTop: '20px',
  },
});

interface cartProduct {
  imageUrl: string;
  name: string;
  price: number;
  count: number;
  totalPrice: number;
}

interface cartInterface {
  [key: string]: cartProduct;
}

const ProductItem = () => {
  const context = useContext(shopContext);
  const classes = useStyles();

  const { products, addProductToCart, removeProductFromCart } = context;

  const { cart }: any = context;

  const countUi = (id: string) => {
    if (cart[id]) {
      return cart[id].count;
    }
    return 0;
  };

  return (
    <>
      {products.map((item: any, index: number) => (
        <Box className={classes.productBox} key={index}>
          <CustomImageList imageList={item.image} />

          <Box sx={{ maxWidth: 400, flexGrow: 1, marginLeft: '10px' }}>
            <Grid
              item
              container
              spacing={0}
              justifyContent={'center'}
              alignItems="center"
              className={classes.itemGrid}
              direction="row"
            >
              <Grid item container spacing={0}>
                <span className={classes.titleStyle}>
                  {' '}
                  {item.name} , {item.otherName}{' '}
                </span>
              </Grid>

              <Divider
                orientation="horizontal"
                flexItem
                className={classes.dividerStyle}
              />

              <Grid item container spacing={0}>
                <span className={classes.priceStyle}>
                  {' '}
                  <AttachMoney />
                  {item.regularPrice?.toFixed(2)}
                </span>
              </Grid>

              <Grid
                item
                container
                xs={12}
                spacing={0}
                justifyContent="space-between"
              >
                {/* Increment and Decrement Button  */}
                <Button
                  variant="outlined"
                  onClick={() => addProductToCart(item)}
                  size="large"
                >
                  +
                </Button>
                <span className={classes.count}>{countUi(item.id)}</span>
                <Button
                  variant="outlined"
                  disabled={countUi(item.id) == 0}
                  onClick={() => removeProductFromCart(item.id)}
                  size="large"
                >
                  -
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProductItem;
