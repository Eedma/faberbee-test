import { Grid, Typography } from "@mui/material";
import { HeroContainer, HeroText } from "./Hero.styles";

const Hero = () => (
  <Grid container>
    <HeroContainer>
      <HeroText>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ textTransform: "capitalize" }}
          gutterBottom
        >
          Placeholder Blog
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
      </HeroText>
    </HeroContainer>
  </Grid>
);

export default Hero;
