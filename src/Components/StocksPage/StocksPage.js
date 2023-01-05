import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import StocksPageTile from "./StocksPageTiles";
import iex from "../../Config/iex";
import StockRow from "./StockRow";

export default function StocksPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Stocks Page" />
        <main>
          
          <Grid container spacing={2} align="center">

          <table>
            <thead>
              <tr>
                <th> Ticker</th>
                <th>Price</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <StockRow ticker="aapl" />
              <StockRow ticker="goog" />

            </tbody>
          </table>
            <StocksPageTile/>
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}
 
const mainFeaturedPost = {
 
};
 
