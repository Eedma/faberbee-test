import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./Header";

const theme = createTheme();

const Layout = ({ children }: any) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
    </ThemeProvider>
)

export default Layout;