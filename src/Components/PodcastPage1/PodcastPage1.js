import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import PodcastPageTile from "./PodcastPageTiles";
import ReactAudioPlayer from 'react-audio-player';
import Typography from '@material-ui/core/Typography';
 import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    width: "100",
    height: "100",
    overflow: "scroll",
    position: "relative"
    
  },
  
}));
export default function PodcastPage1() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Podcasts" />
        <main>
          
            <Grid item xs={12} container spacing={12} align="center" style={{marginTop:"20px"}}>
              <Grid item xs={12}>

                <Typography  variant="h6" color="inherit" align='left'>
                  1.Podcast -One
                </Typography><br></br>
                
                
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                
          </Grid>
         
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  2.Podcast -Two
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.ogg"
                      autoPlay
                      controls
                     
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  4.Podcast -Four
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.ogg"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
          <Grid item xs={12}>
                <Typography variant="h6" color="inherit" align='left'>
                  3.Podcast -Three
                </Typography><br></br>
                <Grid>
                <div>
                  <ReactAudioPlayer
                      src="./podcast.mp3"
                      autoPlay
                      controls
                  />
                </div>
          </Grid></Grid>
 
            <PodcastPageTile/>
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
 
 
 

