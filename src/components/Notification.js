import { Alert, Snackbar } from "@mui/material";

const Notification = props => {

    const { notify, setNotify } = props;
    const closeHandler = () => {
        setNotify({ ...notify, isOpen: false });    
    }


    return (
        <Snackbar open={notify.isOpen}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }
            }
            onClose={closeHandler}
            autoHideDuration={3000}>
            <Alert severity={`${notify.type || 'success'}`}
            onClose={closeHandler}>
                {notify.message}
            </Alert>
        </Snackbar>

    )
}

export default Notification;