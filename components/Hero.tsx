import { Container, Grid } from "@mui/material";

const Hero = ({children}:any) => (
        <Grid container>
        <h1>super duper blog</h1>
            {children}
            </Grid>
        
)
export default Hero;