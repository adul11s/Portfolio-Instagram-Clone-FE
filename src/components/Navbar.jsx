import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderColor: "black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Link to="/">
                <img
                  src={require("../images/logo.png")}
                  alt=""
                  justifyContent="center"
                />
              </Link>
            </Grid>
            <Grid container item xs={4}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ color: "black", fontSize: "22px" }} />
                </div>
                <InputBase
                  style={{ color: "black", fontSize: "17px" }}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={3}>
                <Grid item>
                  <Link to="/">
                    <HomeIcon style={{ color: "black", fontSize: "22px" }} />
                  </Link>
                </Grid>
                <Grid item>
                  <TelegramIcon style={{ color: "black", fontSize: "22px" }} />
                </Grid>
                <Grid item>
                  <ExploreOutlinedIcon
                    style={{ color: "black", fontSize: "22px" }}
                  />
                </Grid>
                <Grid item>
                  <FavoriteBorderIcon
                    style={{ color: "black", fontSize: "22px" }}
                  />
                </Grid>
                <Grid item>
                  <Link to="/profile">
                    <Avatar
                      style={{ color: "black", width: "22px", height: "22px" }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
