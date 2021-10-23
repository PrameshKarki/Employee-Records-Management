import react from "react";

// *Import Material Components
import { Paper, Card, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fdfdff"
    },
    pageHeader: {
        padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
        display: "flex",
        alignItems:"center",
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    pageIcon: {
        display: "inline-block",
        padding: theme.spacing(2),
        color: "#3c44b1 !important",
        height:"fit-content"
    },
    pageTitle: {
        padding: theme.spacing(4),
        "& .MuiTypography-subtitle2": {
            opacity: "0.6"
        }
    },

}))

const PageHeader = (props) => {
    const { title, subtitle, icon } = props;

    const classes = useStyles();

    return <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
            <Card className={`${classes.pageIcon}`}>
                {icon}
            </Card>

            <div className={classes.pageTitle}>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="subtitle2" component="div">
                    {subtitle}
                </Typography>
            </div>
        </div>
    </Paper>

}

export default PageHeader;