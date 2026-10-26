import { CssBaseline, ThemeProvider } from "@mui/material";
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
        <About />
        <Technologies />
        <Experience />
        <Footer />
    </ThemeProvider>
);

export default App;
