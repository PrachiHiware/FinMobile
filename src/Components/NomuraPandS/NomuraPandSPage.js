import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import NomuraPandSPageTile from "./NomuraPandSPageTiles";
import { Button, Typography } from "@material-ui/core";
import Link from "@material-ui/core";

export default function NomuraPandSPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" align="center">
        <Header title="Nomura P and S Page" />
        <main>
          
          <Grid container spacing={6} align="left">
          
                    
                    <Typography>
                      <ol>
                        <li><h4>Products</h4></li>
                          <ul>
                            <li>Credit</li>
                            <li>Emergency Markets</li>
                            <li>Equities</li>
                            <li>FX</li>
                            <li>Rates</li>
                            <li>Securitized Products</li>
                          </ul>
                      
                        <li><h4>Services</h4></li>
                          <ul>
                            <li>Sales and Trading</li>
                            <li>Structuring</li>
                            <li>Execution Services</li>
                            <li>Research</li>
                          </ul>
                      </ol></Typography>
                      <Typography align="center">
                   For more information -<br></br>
                    Visit <br></br><a href="https://www.nomuraholdings.com/services/wholesale/gm.html#inline_content01">www.nomuraholdings.com</a>

                    </Typography>
                
             
            <NomuraPandSPageTile/>
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
 
