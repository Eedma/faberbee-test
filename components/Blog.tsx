import { Container, Grid, Typography, Box } from "@mui/material";
import { FC } from "react";

type BlogProps = {
  children: React.ReactNode;
};

const Blog: FC<BlogProps> = ({ children }) => (
  <Container maxWidth="lg">
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={4}
      paddingBottom={2}
    >
      <Grid item xs={3}>
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          {"This is the blog"}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom textAlign="center">
          {"Here's some amazing content"}
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={4} pt={3}>
      {children}
    </Grid>
  </Container>
);

export default Blog;
