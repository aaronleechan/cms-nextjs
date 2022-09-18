import React from 'react';
import { Box, Card, Grid, CardContent, CardMedia,Typography,CardActions,Button, List, ListSubheader, ListItemIcon, ListItemText, Collapse, ListItem, ListItemAvatar, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Business from '@mui/icons-material/Business'
import Book from '@mui/icons-material/Book'
import Phone from '@mui/icons-material/Phone'

// import Menu from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material'
import BeachAccessIcon from '@mui/icons-material'


const useStyles = makeStyles ({
    root:{
        margin: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        minHeight:"100vh"
    },
    cardMedia:{
        width: "200px",
        height: "200px",
    },
    grid:{
        marginTop: "5px"
    },
    list:{
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'background.paper'
    }
})


const ResturantProfile = () =>{

    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Card>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.grid}
                >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image="/favicon.ico"
                        className={classes.cardMedia}
                    />
                </Grid>

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        <List className={classes.list}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <Business />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Business Name" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <Book />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <Phone />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Phone" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                    </Typography>

                    <Typography variant="body2" color='primary'>
                        This is Resturant Description. Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="small">Create Menu</Button>
                    <Button size="small">Menu</Button>
                </CardActions>
                </Card>
        </Box>
    )
}

export default ResturantProfile;