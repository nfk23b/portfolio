import { createTheme } from "@mui/material/styles";

export const colors = {
    muted: "#555",
    body: "#666",
    line: "rgba(144, 144, 144, 0.5)",
};

export default createTheme({
    palette: {
        primary: { main: "#4c5c96" },
        secondary: { main: "#2e3141" },
    },
    typography: {
        fontFamily: `"Source Sans 3", sans-serif`,
        fontWeightRegular: 300,
    },
    breakpoints: {
        values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontSize: "12pt",
                    "@media (min-width: 768px)": { fontSize: "13pt" },
                    "@media (min-width: 1140px)": { fontSize: "14pt" },
                },
            },
        },
    },
});
