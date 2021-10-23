
// *Import Material Components
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MUIRadioGroup } from "@mui/material";


const RadioGroup = props => {
    const { name, label, onChange, items, value } = props;


    return (<FormControl>
        <FormLabel>{label}</FormLabel>
        <MUIRadioGroup row
            name={name}
            value={value}
            onChange={onChange}>
            {items.map((item, index) => {
              return  <FormControlLabel key={item.id} value={item.title} control={<Radio />} label={item.title} />

            })}

        </MUIRadioGroup>
    </FormControl>
    )
}

export default RadioGroup;