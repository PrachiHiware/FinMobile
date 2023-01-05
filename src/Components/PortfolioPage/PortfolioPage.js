import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import PortfolioPageTile from "./PortfolioPageTiles";
 
export default function PortfolioPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Portfolio Page" />
        <main>
          
          <Grid container spacing={2} align="center">
            <PortfolioPageTile/>
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
 
