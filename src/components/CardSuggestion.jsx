import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
const CardSuggestion = (props) => {
  return (
    <div>
      {" "}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card style={{ marginTop: "10px" }}>
            <CardHeader
              action={
                <IconButton aria-label="close">
                  <CloseIcon />
                </IconButton>
              }
            ></CardHeader>
            <CardMedia style={{ display: "flex", justifyContent: "center" }}>
              <Avatar></Avatar>
            </CardMedia>
            <CardContent>
              <Typography style={{ marginTop: "5px" }}>Username</Typography>

              <Typography style={{ marginTop: "5px" }}>Follows you</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px", width: "134px", height: "30px" }}
              >
                Follow
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ marginTop: "10px" }}>
            <CardHeader
              action={
                <IconButton aria-label="close">
                  <CloseIcon />
                </IconButton>
              }
            ></CardHeader>
            <CardContent>
              <Avatar style={{ justifyContent: "center" }}></Avatar>
              <Typography style={{ marginTop: "5px" }}>Username</Typography>

              <Typography style={{ marginTop: "5px" }}>Follows you</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px", width: "134px", height: "30px" }}
              >
                Follow
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ marginTop: "10px" }}>
            <CardHeader
              action={
                <IconButton aria-label="close">
                  <CloseIcon />
                </IconButton>
              }
            ></CardHeader>
            <CardContent>
              <Avatar></Avatar>
              <Typography style={{ marginTop: "5px" }}>Username</Typography>

              <Typography style={{ marginTop: "5px" }}>Follows you</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px", width: "134px", height: "30px" }}
              >
                Follow
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default CardSuggestion;
