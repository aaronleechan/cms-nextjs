import { useSession } from 'next-auth/react';
import { AppBar,Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Menu from '@mui/icons-material/Menu';
import Link from 'next/link'

const useStyles = makeStyles ({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: 2
    },
    title:{
        flexGrow: 1
    }
})


export const Header = () =>{

    const {data: session} = useSession();
    const classes = useStyles();

    return(
        <header>
            <Box className={classes.root} >
                <AppBar position="static" color='inherit' >
                    <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            aria-label="menu"
                            className={classes.menuButton}
                        >
                            <Menu/> 
                        </IconButton>
                            <Typography variant='h5' component={'div'} color='textSecondary' className={classes.title}>
                                <Link href="/">Home Page</Link>
                            </Typography> 
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}