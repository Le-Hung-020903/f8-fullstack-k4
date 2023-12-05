import { blue } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: blue,
            },
        },
        dark: {
            palette: {
                // primary: {
                //     main: "#000",
                // },
            },
        },
    },
    // ...other properties
});

export default theme;
