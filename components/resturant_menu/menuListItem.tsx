import { Box, List, ListItem, ListItemText,Grid, Button } from '@material-ui/core';

interface menuItemInterface {
    name: String;
    otherName: String;
    regularPrice: Number;
    mealTime: String;
}

const MenuListItem = (title: string,items: any) => {


    function uiRender(){
        let ui: any = []
        items.map((v: menuItemInterface, index: number) => {
            if(v.mealTime == title){
                ui.push(
                    <ListItem style={{flex: 3}} key={index}>
                        <Grid container>
                            <Grid xs={3} md={3}><ListItemText primary={v.name}/></Grid>
                            <Grid xs={3} md={3}><ListItemText primary={v.otherName || ''}/></Grid>
                            <Grid xs={3} md={3}><ListItemText primary={`${v.regularPrice}`}/></Grid>
                            {/* <Grid xs={3} md={3}><Button variant="contained"> Add Into Cart</Button></Grid> */}
                        </Grid>
                    </ListItem>
                )
            }
        })
        return ui;
    }



    return(
      <Box>
        <h2>{title}</h2>
        <List>
            {uiRender()}
        </List>
      </Box>
    )
}

export default MenuListItem