import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BlogData } from "../utils/types";
import { FC } from "react";

type BlogCardProps = {
  post: BlogData;
};

const BlogCard: FC<BlogCardProps> = ({ post }) => (
  <Grid item xs={12} md={3}>
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
          {post.title}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {post.body}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {post.name}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default BlogCard;
