import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Announcement";
import ArchiveIcon from "@material-ui/icons/Assessment";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { IconButton } from "@material-ui/core";

function handleClick() {
  // event.preventDefault();

};

export default function BottomNavigationPage() {
  const [value, setValue] = React.useState();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Paper
          style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              component={Link}
              to="/home"
            />

            <BottomNavigationAction
              label="News"
              icon={<FavoriteIcon />}
              component={Link}
              to="/news"
            />

            <Button style={{borderRadius: '70%',maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}}
            variant="contained"
            color="grey"
            align="right"
            onClick={()=> {handleClick()}}>
              Talk
          </Button>
          














































































































































































































































































































































































































































































































































































          <BottomNavigationAction 
          label="Portfolio" 
          icon={< AssessmentIcon />}
          component={Link}
          to="/portfolio" />

          <BottomNavigationAction 
            label="Stocks" 
            icon={< TrendingUpIcon />} 
            component={Link}
            to="/stocks" />

          </BottomNavigation>
        </Paper>
      </main>
    </React.Fragment>
  );
}
