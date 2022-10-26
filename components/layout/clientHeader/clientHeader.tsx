import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AddShoppingCart } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import shopContext from '../../../context/shop-context';
import { totalShoppingCartProductCount } from '../../../utils/shoppingCartCalculation';
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  countStyle: {
    fontSize: '12px',
    position: 'absolute',
    top: '0px',
    left: '32px',
    right: '0px',
    bottom: '30px',
    color: 'white',
    background: 'black',
    borderRadius: '40px',
    width: '16px',
  },
});

export const ClientHeader = (props: any) => {
  const { updateCheckout } = props;
  const classes = useStyles();
  const context = useContext(shopContext);
  const { cart } = context;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalShoppingCartProductCount(cart));
  }, [cart]);

  return (
    <header>
      <Box className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography
              variant="h5"
              component={'div'}
              color="textSecondary"
              className={classes.title}
            >
              <Link href="/">
                Home
              </Link>
            </Typography>

            <IconButton
              size="medium"
              edge="start"
              aria-label="menu"
              className={classes.menuButton}
              onClick={() => updateCheckout()}
            >
              <AddShoppingCart />
              <Typography className={classes.countStyle}>{total}</Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
