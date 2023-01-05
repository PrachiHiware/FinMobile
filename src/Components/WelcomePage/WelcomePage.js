import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import WelcomePageTile from "./WelcomePageTiles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


function handleClick() {
  // event.preventDefault();

};

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Welcome Page" />
            <main> 
              <Grid container spacing={2} align="center">
               
              <Grid container spacing={12}>
                    
                    <Button style={{maxWidth: '100%', maxHeight: '70%', minWidth: '100%', minHeight: '70%' ,marginTop:"50px",borderRadius:"30px"}}
                            variant="contained"
                            color="grey"
                            align="center"
                            component={Link}
                            to="/news">
                            1.  Top 5 New Headline
                    </Button>
                    
                </Grid>
                
                <Grid container spacing={12}>
                  
                  <Button style={{maxWidth: '100%', maxHeight: '70%', minWidth: '100%', minHeight: '70%' ,marginTop:"50px" ,borderRadius:"30px"}}
                          variant="contained"
                          color="grey"
                          align="center"
                          component={Link}
                          to="/portfolio">
                          2 - View Your Portfolio 
                  </Button>
                
              </Grid>

              <Grid container spacing={12}>
                  
                  <Button style={{maxWidth: '100%', maxHeight: '70%', minWidth: '100%', minHeight: '70%' ,marginTop:"50px" ,borderRadius:"30px"}}
                          variant="contained"
                          color="grey"
                          align="center"
                          component={Link}
                          to="/stocks">
                          3. View Current Stocks of Companies
                  </Button>
                
              </Grid>
              <Grid container spacing={12}>
                  
                  <Button style={{borderRadius: '5px!important', maxWidth: '100%', maxHeight: '70%', minWidth: '100%', minHeight: '70%' ,marginTop:"50px",borderRadius:"30px"}}
                          variant="contained"
                          color="grey"
                          align="center"
                          component={Link}
                          to="/podcast1">
                          4. Listen to Podcasts 
                  </Button>
                
              </Grid>
              <Grid container spacing={12}>
                  
                  <Button style={{maxWidth: '100%', maxHeight: '70%', minWidth: '100%', minHeight: '70%' ,marginTop:"50px" ,borderRadius:"30px"}}
                          variant="contained"
                          color="grey"
                          align="center"
                          component={Link}
                          to="/nomurapands">
                          5. View Products and Services.
                  </Button>
                
              </Grid>
              <WelcomePageTile/>
              
              </Grid>
            </main>
        </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
