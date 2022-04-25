import { Container, Grid } from "@mui/material";

const Blog = ({ children }: any) => (
  <Container maxWidth="lg">
    <Grid container spacing={4} pt={3}>
      {children}
    </Grid>
  </Container>
);

export default Blog;
