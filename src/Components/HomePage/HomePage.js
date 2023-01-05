import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import HomePageTiles from "./HomePageTiles";

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Home" / >
            <main>
              <MainFeaturedPost post={mainFeaturedPost} align="center"/>
                <Grid container spacing={1} align="center">
                    <HomePageTiles />
                </Grid>
            </main>
        </Container>
      <br />
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  
  title: "Smart Interacting Mirror",
  description:"Smart Interacting Mirror Shares financial news, products offered & manage portfolio with an interactive session.",
  image:
    "C:\Users\prach\Desktop\React\FinTwin\public\glass-smart-mirror.jpg",
  imgText: "HomePage",
 
  
};
