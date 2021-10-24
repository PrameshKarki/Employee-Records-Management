// *Import Material Components
import { Button as MUIButton } from "@mui/material";

const Button = props => {
    const { text, variant, color, size, onClick, ...other } = props;
    return (
        <MUIButton
            variant={variant || "contained"}
            color={color || "primary"}
            size={size || "large"}
            onClick={onClick}
            sx={
                {
                    margin: "0 4px",
                    textTransform: "none",
                }
            }
            {...other}>
            {text}
        </MUIButton>
    )
}

export default Button;