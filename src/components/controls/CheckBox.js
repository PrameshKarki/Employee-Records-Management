import { Checkbox as MUICheckbox, FormControl, FormControlLabel } from "@mui/material";
import react from "react";

const CheckBox = props => {
    const { name, label, value, onChange } = props;

    const convertToDefaultEventParameter=(name,value)=>{
        return {
            target:{
                name, 
                value
            }
        }
    }

    return (
        <FormControl>
            <FormControlLabel control={<MUICheckbox
                name={name}
                color="primary"
                checked={value}
                onChange={e=>onChange(convertToDefaultEventParameter(name,e.target.checked))} />
            }
                label={label} />
        </FormControl>

    )
}

export default CheckBox;