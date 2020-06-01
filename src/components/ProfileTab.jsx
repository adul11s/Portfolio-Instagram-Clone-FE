import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import GridOnIcon from "@material-ui/icons/GridOn";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    maxWidth: 294,
    minWidth: 50,
    maxHeight: 294,
    minHeight: 50,
  },
  media: {
    maxHeight: 294,
    minHeight: 50,
  },
  indicator: {
    backgroundColor: "black",
    borderRight: "none",
    boxShadow: "none",
    top: 0,
  },
  indicator2: {
    borderTop: "1px solid #e8e8e8",
  },
});

const ProfileTab = (props) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div>
      <Paper
        elevation={0}
        square
        style={{
          marginTop: "30px",
          borderTop: "none",
          backgroundColor: "#fafafa",
        }}
      >
        <Tabs
          classes={{ indicator: classes.indicator, root: classes.indicator2 }}
          value={value}
          indicator={{ backgroundColor: "primary" }}
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab
            {...a11yProps(0)}
            icon={<GridOnIcon />}
            label="POSTS"
            style={{ display: "flex" }}
          />
          <Tab {...a11yProps(1)} icon={<InstagramIcon />} label="IGTV" />
          <Tab {...a11yProps(2)} icon={<BookmarkBorderIcon />} label="SAVED" />
          <Tab
            {...a11yProps(3)}
            icon={<AssignmentIndOutlinedIcon />}
            label="TAGGED"
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InstagramIcon style={{ fontSize: "62px", marginTop: "30px" }} />
        <Typography style={{ marginTop: "15px" }}>Upload a Video</Typography>
        <Typography style={{ marginTop: "10px" }}>
          Video must beetween 1 and 60 minutes long
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Upload
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "12px",
            color: "rgba(var(--f52,142,142,142),1)",
          }}
        >
          Only you can see what you've saved
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("../images/romli.jpg")}
              />
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
};

export default ProfileTab;
