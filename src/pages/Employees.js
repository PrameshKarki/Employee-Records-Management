import react from "react";

// *Import material components
import {Paper} from "@mui/material";

import { makeStyles } from "@mui/styles";

// *Import custom components
import EmployeeForm from "./EmployeeForm";
import components from "../components";

// *Import Material Icons
import PeopleOutline from '@mui/icons-material/PeopleOutlineTwoTone';

const useStyles=makeStyles(theme=>({
    pageContent:{
        width:"80%",
       margin:`${theme.spacing(3)} auto`,
       padding:theme.spacing(2) 
    }
}))

const employees=()=>{
    const classes=useStyles();
    return (
        <>
        <components.PageHeader
        title="Employee"
        subtitle="Employee Details"
        icon={<PeopleOutline fontSize="large"/>}/>

        <Paper className={classes.pageContent}>
        <EmployeeForm/>
        </Paper>
        </>
    )
}

export default employees;