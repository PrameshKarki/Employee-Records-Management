import { Dialog as MUIDialog, DialogActions, DialogContent, DialogTitle, Typography, IconButton } from "@mui/material";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import controls from "./controls";
import { styled } from "@mui/system";

const Dialog = styled(MUIDialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        padding: "16px",
        position: "absolute",
        top: "40px",
        textAlign: "center",
        width: "30%"

    }

}))



const ConfirmDialog = props => {
    const { confirmDialog, setConfirmDialog } = props;

    const dialogCloseHandler=()=>{
        setConfirmDialog({...confirmDialog,isOpen:false});
    }

    return (
        <Dialog open={confirmDialog.isOpen} onClose={dialogCloseHandler}>
            <DialogTitle>
                <IconButton disableRipple>
                    <NotListedLocationIcon sx={{ fontSize: "90px", color: "red" }} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>

            </DialogContent>
            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <controls.Button text="No" color="primary" onClick={() => { setConfirmDialog({...confirmDialog,isOpen:false})}} />
                <controls.Button text="Yes" color="secondary" onClick={confirmDialog.onConfirm} />

            </DialogActions>

        </Dialog>
    )
}

export default ConfirmDialog;