import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type ArticleBlogCard = {
  post: PostData;
};

const ArticleBlogCard = ({ post }: ArticleBlogCard) => {
  return (
    <Grid item xs={12} md={3}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.body.substring(0, 200).concat("...")}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default ArticleBlogCard;
