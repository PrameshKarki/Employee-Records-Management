import react, { useState } from "react";

// *Import material components
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from "@mui/material";

import { makeStyles } from "@mui/styles";

// *Import custom components
import EmployeeForm from "./EmployeeForm";
import components from "../components";

// *Import Material Icons
import PeopleOutline from '@mui/icons-material/PeopleOutlineTwoTone';
import SearchIcon from '@mui/icons-material/Search';

import useTable from "../hooks/useTable";

import * as Employee from "../services/Employee";

import controls from "../components/controls";

const { Input } = controls;

const useStyles = makeStyles(theme => ({
    pageContent: {
        width: "90%",
        margin: `${theme.spacing(3)} auto`,
        padding: theme.spacing(2)
    }
}))

const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Email Address(Personal)" },
    { id: "mobile", label: "Mobile Number" },
    { id: "department", label: "Department" }
]

const employees = () => {
    const [records, setRecords] = useState(Employee.Fetch());

    const [filterFn, setFilterFn] = useState({ fn: items => items });

    const classes = useStyles();

    const searchHandler = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === ""|| target.value==" ")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value.toLowerCase()));
            }
        })
    }

    const { TableContainer, TableHeader, TablePagination, recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn    );
    return (
        <>
            <components.PageHeader
                title="Employee"
                subtitle="Employee Details" 
                icon={<PeopleOutline fontSize="large" />} />

            <Paper className={classes.pageContent}>

                {/* <EmployeeForm/> */}
                <Toolbar>
                    <Input name="search"
                        label="Search Employees"
                        sx={{ width: "40%" }}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),

                        }}
                        onChange={searchHandler}

                    />
                </Toolbar>


                <TableContainer>
                    <TableHeader />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((item, index) => {
                            return (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                            </TableRow>
                            )
                        })}

                    </TableBody>

                </TableContainer>
                <TablePagination />
            </Paper>
        </>
    )
}

export default employees;