import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import ReportsPageTile from "./ReportsPageTiles";
 
export default function ReportsPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Reports Page" />
        <main>
          
          <Grid container spacing={2} align="center">
            <ReportsPageTile/>
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
 
