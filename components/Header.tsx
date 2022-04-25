import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return(
        <>
      <AppBar position="fixed">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SUPER DUPER BLOG
          </Typography></Toolbar>
      </AppBar>
      <Toolbar />
    </>
    )
}

export default Header;