
import {DatePicker as MUIDatePicker, TextField} from "@mui/material";

const DatePicker=props=>{
    const {name,label,value,onChange}=props;

    const convertToDefaultEventParameter=(name,value)=>{
        return {
            target:{
                name,
                value
            }
        }
    }

    return <DatePicker
    label={label}
    value={value}
    onChange={(date=>onChange(name,data))}
    renderInput={<TextField/>}
    />

}

export default DatePicker;