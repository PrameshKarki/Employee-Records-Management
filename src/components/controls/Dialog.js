import { Dialog as MUIDialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ActionButton from "./ActionButton";

import CloseIcon from '@mui/icons-material/Close';


const MUIStyledDialog = styled(MUIDialog)((theme) => ({
    "& .MuiDialog-paper": {
        padding: "12px",
        width: "auto",
        height: "fit-content",
        position: "absolute",
        top: "10px"
    }
}))

const Dialog = props => {

    const dialogCloseHandler = () => {
        setOpenDialog(false);
    }
    const { title, children, openDialog, setOpenDialog } = props;

    return (<MUIStyledDialog open={openDialog} maxWidth="md" onClose={dialogCloseHandler}>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            <ActionButton color="secondary" onClick={() => { setOpenDialog(false) }}>
                <CloseIcon />
            </ActionButton>

        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
    </MUIStyledDialog>

    )
}

export default Dialog;