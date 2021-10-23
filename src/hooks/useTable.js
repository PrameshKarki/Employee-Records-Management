//   *import material components
import { Table as MUITable, TableHead, TableRow, TableCell, TablePagination as MUITablePagination } from "@mui/material";

import { styled } from "@mui/system";
import { useState } from "react";

const Table = styled(MUITable)(({ theme }) => ({
    marginTop: theme.spacing(3),
    "& thead th": {
        fontWeight: "600",
        color: "white",
        backgroundColor: theme.palette.primary.main,
        fontSize: "14px"
    },
    "& tbody td": {
        fontWeight: "200"
    },
    "& tbody tr:hover": {
        backgroundColor: "#fffbf2",
        cursor: "pointer"
    }
}))

export default function useTable(records, headCells,filter) {

    const rowsPerPageOptions = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[page]);//i.e 5

    const pageChangeHandler = (event, newPage) => {
        setPage(newPage);

    }
    const rowsPerPageChangeHandler = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    const recordsAfterPagingAndSorting = () => {
        return filter.fn(records).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    }

    const TableContainer = props => {
        return (
            <Table>
                {props.children}
            </Table>

        )
    }
    const TableHeader = props => {
        return (
            <TableHead>
                <TableRow>
                    {headCells.map(headCell => <TableCell key={headCell.id}>{headCell.label}</TableCell>)}
                </TableRow>
            </TableHead>

        )
    }
    const TablePagination = () => {
        return (
            <MUITablePagination
                component="div"
                count={records.length}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler} />
        )
    }
    return {
        TableContainer,
        TableHeader,
        TablePagination,
        recordsAfterPagingAndSorting
    }
}


