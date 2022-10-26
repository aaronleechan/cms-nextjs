import Layout from '../components/layout/Layout';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBook from '@mui/icons-material/MenuBook';
import { Tooltip } from '@mui/material';


const obj = [
  {url: "/onlineOrder", title: "Sample Online Order",usage: "Technology: React Redux, Hygraph (CMS), GraphQL, ListItem"}
]

export default function Home(){
  return(
    <Layout>
      <Box
        sx={{
          width: 500,
          height: 500,
          display: 'flex',
          justifyContent: 'center',
          pt: '100px'
        }}
      >

          <List>
            {
              obj.map((v,index)=>(
                <Tooltip title={v.usage}>
                  <ListItem>
                    <ListItemButton component="a" href={v.url}>
                      <ListItemIcon><MenuBook/></ListItemIcon>
                      <ListItemText primary="Sample Online Order" />
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              ))
            }
          </List>
      </Box>
    </Layout>
  )
}