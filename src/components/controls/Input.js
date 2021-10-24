
// *Import Material Components
import { TextField } from "@mui/material";

const Input = props => {
    const { name, label,error=null,value, onChange,...other } = props;
    return <TextField
        variant="outlined"
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        {...(error && {
            error:true,
            helperText:error
        })}
        {...other} />
}

export default Input;