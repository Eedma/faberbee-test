import { Container, Grid, Typography, Box } from "@mui/material";

type BlogProps = {
  children: React.ReactNode;
};

const Blog = ({ children }: BlogProps) => (
  <Container maxWidth="lg">
    <Box maxWidth="sm" pt={2} pl={2}>
      <Typography variant="h2" component="h1" gutterBottom>
        This is the blog
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Here's some amazing content
      </Typography>
    </Box>
    <Grid container spacing={4} pt={3}>
      {children}
    </Grid>
  </Container>
);

export default Blog;
