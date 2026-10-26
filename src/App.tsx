import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box component="main">
            <About />
            <Technologies />
            <Experience />
        </Box>
        <Footer />
    </ThemeProvider>
);

export default App;
