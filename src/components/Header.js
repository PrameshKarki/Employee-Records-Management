

// *Material components
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from "@mui/material";

// *Material Icons
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';

import {makeStyles} from "@mui/styles"

// *For styling 
 const useStyles = makeStyles({ 
    root: {
      backgroundColor: '#fff !important',
      transform:"translateZ(0)"
    },
    searchInput:{
        opacity:"0.6",
        padding:"0px 8px",
        fontSize:"0.8rem",
        "&:hover":{
            backgroundColor:"#f2f2f2"
        },
        "& .MuiSvgIcon-root":{
            marginRight:"8px"
        }

    },
    iconButton:{
        "&&":{
            margin:"0 10px"
        }
    }
 
 });

const Header = () => {
    const classes=useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item >
                        <InputBase
                        className={classes.searchInput}
                        placeholder="Search Here"
                        startAdornment={<SearchIcon fontSize="small"/>}/>
                    </Grid>
                    <Grid item sm />
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton className={classes.iconButton} >
                            <Badge badgeContent={7} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <ExitToAppIcon />
                        </IconButton>
                    </Grid>

                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default Header;

