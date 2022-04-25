import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            textTransform: "uppercase",
            display: { xs: "none", sm: "block" },
          }}
        >
          placeholder blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
