import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Slide,
  Typography,
} from '@material-ui/core';

import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import shopContext from '../../context/shop-context';
import { totalShoppingCartProductCount } from '../../utils/shoppingCartCalculation';

const useStyles = makeStyles({
  dialogBox: {
    height: '100%',
    position: 'absolute',
    right: '0',
  },
  drawerBox: {
    left: 'auto',
    right: '0px',
    width: '15%',
    margin: '10',
    padding: '15px 0px 0px 0px',
  },
  listItemBox: {},
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface cartProduct {
  imageUrl: string;
  name: string;
  price: number;
  count: number;
  totalPrice: number;
}

const Checkout = (props: any) => {
  const { openCheckout, setOpenCheckout } = props;
  const context = useContext(shopContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [verifyOrder, setVerifyOrder] = useState(false);
  const classes = useStyles();
  const { cart }: any = context;
  const { resetProductCart } = context;

  useEffect(() => {
    let total: number = 0;
    Object.keys(cart).map((c: any) => {
      if (cart[c].count > 0) {
        total += Number(cart[c].totalPrice);
      }
    });
    setTotalPrice(total);
  }, [cart]);

  useEffect(()=>{

  },[])

  const totalUiRender = () => {

    let amount: number = totalShoppingCartProductCount(cart);

    if (amount <= 0) return null;

    return (
      <>
        <Divider />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
        >
          <Grid container item xs={2}>
            Total:
          </Grid>
          <Grid container item xs={4} justifyContent="center">
            ({amount})
          </Grid>
          <Grid container item xs={6} justifyContent="flex-start">
            ${totalPrice}
          </Grid>
        </Grid>
      </>
    );
  };

  const listRender = () => (
    <List>
      {cart &&
        Object.keys(cart).map((v: any) => {
          const { count, price, totalPrice, imageUrl, name } = cart[v];
          if (count == 0) return null;

          return (
            <ListItem className={classes.listItemBox} key={v}>
              <ListItemAvatar>
                <Avatar alt={name} src={imageUrl} variant="square" />
              </ListItemAvatar>
              <ListItemText
                primary={`${name} (${count})`}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2">
                      ${totalPrice}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
    </List>
  );

  const onClickProceedCheckout = () => {
    setVerifyOrder(true);
    resetProductCart();
  };

  const cartTitleUIRender = () => (
    <Box
      sx={{
        width: '300px',
        pt: '10px',
      }}
    >
      <Typography
        align="center"
        display="initial"
        color="inherit"
        variant="h5"
        component="h6"
      >
        Order Cart
      </Typography>
    </Box>
  );

  const OrderCartDrawer = () => {
    return (
      <>
        {cartTitleUIRender()}
        <Divider />
        <Box sx={{ mt: '30px', pl: '10px', flexGrow: 1 }}>
          {listRender()}
          {totalUiRender()}
          {verifyOrder && <>You Complete the Order</>}
        </Box>{' '}
      </>
    );
  };

  const drawerClose = () =>{
    setOpenCheckout(false)
    setVerifyOrder(false)
  }

  return (
    <Drawer
      open={openCheckout}
      onClose={drawerClose}
      anchor="right"
    >
      <OrderCartDrawer />
      <Button variant="contained" onClick={() => onClickProceedCheckout()}>
        Proceed to Checkout
      </Button>{' '}
    </Drawer>
  );
};

export default Checkout;
