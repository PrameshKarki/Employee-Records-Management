import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: "80%"

        }
    }
}))

const Form=props=>{
    const classes=useStyles();
    const {children,...other}=props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {children}
        </form>
    )
}

export default Form;