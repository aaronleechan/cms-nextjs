import { Box, List, ListItem, ListItemText,Grid, Button } from '@material-ui/core';
import { GraphQLClient } from 'graphql-request';
import { menuItemsQuery } from '../../../graphqlQuery/resturant_items';
import { MenuListItem } from '../../../components/resturant_menu';

export async function getServerSideProps({params}: any) {
  const hygraph = new GraphQLClient(`${process.env.GRAPHQL}`);

  const { items } = await hygraph.request(menuItemsQuery);
  
  return {
    props: {
      items,
    },
  };
}

const Menu = ({ items }: any) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {MenuListItem("breakfast",items)}
        {MenuListItem("lunch",items)}
        {MenuListItem("dinner",items)}
    </Box>
  );
};

export default Menu;
