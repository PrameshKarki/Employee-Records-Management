import react, { useState } from "react";

// *Import material components
import { Paper, TableBody, TableRow, TableCell, TableFooter } from "@mui/material";

import { makeStyles } from "@mui/styles";

// *Import custom components
import EmployeeForm from "./EmployeeForm";
import components from "../components";

// *Import Material Icons
import PeopleOutline from '@mui/icons-material/PeopleOutlineTwoTone';

import useTable from "../hooks/useTable";

import * as Employee from "../services/Employee";

const useStyles = makeStyles(theme => ({
    pageContent: {
        width: "80%",
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

    const classes = useStyles();
    const { TableContainer, TableHeader, TablePagination,recordsAfterPagingAndSorting } = useTable(records, headCells);
    return (
        <>
            <components.PageHeader
                title="Employee"
                subtitle="Employee Details"
                icon={<PeopleOutline fontSize="large" />} />

            <Paper className={classes.pageContent}>
                {/* <EmployeeForm/> */}
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