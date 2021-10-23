import react from "react";

// *Global styles
import "./App.css";

// *Import components
import components from "../components";
import Employees from "../pages/Employees";

// *Import Material Components
import {createTheme, CssBaseline,ThemeProvider} from "@mui/material"



// *Create Custom Theme
const theme=createTheme({
    palette:{
        background:{
            default:"#f4f5fd"
        }

    }
})

const App = () => {
    // *App Layout goes here
    return (<ThemeProvider theme={theme}>
        <CssBaseline/>

        <components.Header />

        <Employees/>


    </ThemeProvider>
    )
}

export default App;