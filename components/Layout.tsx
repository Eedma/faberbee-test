import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";

const theme = createTheme();

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    {children}
  </ThemeProvider>
);

export default Layout;
