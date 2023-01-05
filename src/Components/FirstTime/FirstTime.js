
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import FirstTimeTile from "./FirstTimeTiles";
import { Typography } from "@material-ui/core";
export default function FirstTime() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="First Time use" />
        <main>
          
          <Grid container spacing={12} align="center">
            <Typography variant="h6" color="inherit" align='center'>
              Select Your interests
            </Typography>
            <FirstTimeTile/>
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
 
