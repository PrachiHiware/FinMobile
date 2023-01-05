import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import BottomNavigationPage from "../Common/BottomNavigationPage";
import JSONPretty from 'react-json-pretty';
import { Router } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "50%",
    width:"100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 11,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  divHeading: {
    color: "#ca142a",
  },
  subHeading: {
    color: "#115293",
    fontWeight: "600",
  },
  desc: {
    color: "#7A8C98",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//edit prachi

//edit ends here
function handleClick() {
  // event.preventDefault();

};

export default function HomePageTile() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {}, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        
        <br />
        <Grid container spacing={4}>
          
          <Grid container justify = "center">
          <Grid container justify = "center">
          <div>
      
              <Button  style={{borderRadius:"100%",marginRight:"10px"}}
                      variant="contained"
                      color="grey"
                      component={Link}
                      to="/portfolio" 
                      disableRipple>

                          Portfolio
              </Button>

              <Button  style={{borderRadius:"100%",marginRight:"10px"}}
                      variant="contained"
                      color="grey"
                      component={Link}
                      to="/stocks" >

                          Stocks
              </Button>
              <Button  style={{borderRadius:"100%",marginRight:"10px"}}
                      variant="contained"
                      color="grey"
                      component={Link}
                      to="/news" >

                          News
              </Button>

              <Button  style={{borderRadius:"100%",marginTop:"10px"}}
                      variant="contained"
                      color="grey"
                      component={Link}
                      to="/portfolio" >

                          Preferences
              </Button>
          </div>   
          </Grid>
        </Grid>
        </Grid>
      


        <br />
        <br />
        <br />
        
        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}

const featuredPosts = [
  {
    
    image:"./11.jpg",
    imageText: "Portfolio",
  },
  {
   
    image:"./11.jpg",
    imageText: "Stocks",
  },
  
  {
  
    image:"./11.jpg",
    imageText: "News",
  },
  {
    
    image:"./11.jpg",
    imageText: "Nomura Products and Services",
  },
];