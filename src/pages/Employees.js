import react, { useState } from "react";

// *Import material components
import { Paper, TableBody, TableRow, TableCell, Toolbar as MUIToolBar, InputAdornment } from "@mui/material";

import { makeStyles } from "@mui/styles";

// *Import custom components
import EmployeeForm from "./EmployeeForm";
import components from "../components";

// *Import Material Icons
import PeopleOutline from '@mui/icons-material/PeopleOutlineTwoTone';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from '@mui/icons-material/Search';
import Add from '@mui/icons-material/Add';

import useTable from "../hooks/useTable";

import * as Employee from "../services/Employee";

import controls from "../components/controls";
import { styled } from "@mui/system";
import Notification from "../components/Notification";
import ConfirmDialog from "../components/ConfirmDialog";

const { ActionButton } = controls;

const { Input, Button, Dialog } = controls;


const useStyles = makeStyles(theme => ({
    pageContent: {
        width: "90%",
        margin: `${theme.spacing(3)} auto`,
        padding: theme.spacing(2)

    }
}))

const Toolbar = styled(MUIToolBar)((theme) => ({
    display: "flex",
    justifyContent: "space-between"
}))

const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Email Address(Personal)" },
    { id: "mobile", label: "Mobile Number" },
    { id: "department", label: "Department" },
    { id: "actions", label: "Actions" }
]

const employees = () => {
    const [records, setRecords] = useState(Employee.Fetch());

    const [recordForEdit, setRecordForEdit] = useState(null);

    const [openDialog, setOpenDialog] = useState(false);

    const [filterFn, setFilterFn] = useState({ fn: (items) => { return items; } });

    const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "", onConfirm: () => { } })

    const classes = useStyles();

    const addOrEdit = (employee, resetForm) => {

        if (employee.id === 0) {
            Employee.Insert(employee);

        } else {
            Employee.Update(employee);
        }
        resetForm();
        setRecordForEdit(null);
        setOpenDialog(false);
        setRecords(Employee.Fetch());
        setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success"
        })
    }

    const searchHandler = e => {
        let target = e.target;
        setFilterFn({
            fn: (items) => {
                if (target.value === "" || target.value == " ")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value.toLowerCase()));
            }
        })
    }

    const toggleDialogHandler = e => {
        setRecordForEdit(null);
        setOpenDialog(!openDialog);

    }

    const openInPopup = item => {
        setRecordForEdit(item);
        setOpenDialog(true);
    }



    const onDelete = id => {
        setConfirmDialog({...confirmDialog,isOpen:false});
        Employee.Delete(id);
        setRecords(Employee.Fetch());
        setNotify({
            isOpen:true,
            message:"Deleted Successfully",
            type:"error"
        })
    }

    const { TableContainer, TableHeader, TablePagination, recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn);
    return (
        <>
            <components.PageHeader
                title="Employee"
                subtitle="Employee Details"
                icon={<PeopleOutline fontSize="large" />} />

            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Input name="search"
                        label="Search Employees"
                        sx={{ width: "40%" }}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),

                        }}
                        onChange={searchHandler}

                    />

                    <Button text="Add New"
                        startIcon={<Add />}
                        variant="outlined"
                        onClick={toggleDialogHandler}
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
                                <TableCell>
                                    <ActionButton color="primary" onClick={() => { openInPopup(item) }}>
                                        <EditOutlinedIcon fontSize="small" />
                                    </ActionButton>
                                    <ActionButton color="secondary" onClick={()=>{
                                        setConfirmDialog({
                                            isOpen:true,
                                            title:"Are you sure?",
                                            subTitle:"You can't undo this operation",
                                            onConfirm:()=>{onDelete(item.id)}
                                        })
                                    }}>
                                        <DeleteOutlinedIcon fontSize="small" />
                                    </ActionButton>
                                </TableCell>
                            </TableRow>
                            )
                        })}

                    </TableBody>

                </TableContainer>
                <TablePagination />
            </Paper>


            <Dialog openDialog={openDialog} setOpenDialog={setOpenDialog} title="New Employee">
                <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            </Dialog>

            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

        </>
    )
}

export default employees;