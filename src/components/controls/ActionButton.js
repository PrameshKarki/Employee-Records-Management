
import { Button as MUIButton } from "@mui/material";

import { styled } from "@mui/system";

const Button = styled(MUIButton)(({theme}) => ({
    minWidth: "0",
    color:"white",
    margin:"0 2px",
    
    "&.primary": {
        background:theme.palette.primary.light,

    },
    "&.secondary": {
        background:theme.palette.secondary.light
    }
}))

const ActionButton = props => {
    const { color, children, onClick } = props;

    return (
        <Button onClick={onClick} className={`${color}`} >
            {children}
        </Button>
    )
}

export default ActionButton;