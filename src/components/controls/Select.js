
// *Import material components
import { FormControl, InputLabel, Select as MUISelect, MenuItem, FormHelperText } from "@mui/material";

const Select = props => {
    const { name, label, value, error =null, onChange, options } = props;

    return (
        <FormControl variant="outlined" {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MUISelect name={name}
                label={label}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(item => {
                        return <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>

                    })
                } 
            </MUISelect>
            {error && <FormHelperText>{error}</FormHelperText>}

        </FormControl>
    )

}

export default Select;