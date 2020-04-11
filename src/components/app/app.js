import React from "react";
import Header from "../header";
import Section1 from "../section1";
import Technologies from "../technologies";
import Work from "../work";
import Footer from "../footer";
import { Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import "normalize.css/normalize.css";
import "./app.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
    },
    wrapper: {
        maxWidth: "100%",
        padding: 0,
    },
}));

const App = () => {
    const classes = useStyles();

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#4c5c96",
            },
            secondary: {
                main: "#2e3141",
            },
            text: {
                primary: "#fff",
                secondary: "#555",
                third: "#666",
            },
        },
        typography: {
            fontFamily: `Source Sans Pro, sans-serif`,
            fontWeightRegular: 200,
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 480,
                md: 768,
                lg: 1024,
                xl: 1440,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.wrapper}>
                <Header />
                <Section1 />
                <Technologies />
                <Work />
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default App;
