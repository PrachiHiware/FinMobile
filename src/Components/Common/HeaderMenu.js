import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const sections = [
  { title: "Home", url: "/home" },
  { title: "Financial Literacy", url: "/literacy" },
  { title: "Manual", url: "/manual" },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: "#ca142a",
    fontWeight: 600,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    //fontSize: '15'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    "&:hover": {
      color: "#ca142a",
    },
  },
  logo: {
    width: "7%",
    height: "7%",
  },
}));

export default function HeaderMenu(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment >
      <Toolbar className={classes.toolbar}>
        <img
          className={classes.logo}
          alt="logo"
          src="./1.png"
        />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
