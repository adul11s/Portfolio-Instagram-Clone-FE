import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const Footer = (props) => {
  return (
    <div style={{ margin: "20px", padding: "20px" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              ABOUT
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              HELP
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              PRESS
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              API
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              JOBS
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              PRIVACY
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              TERMS
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              LOCATIONS
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              TOP ACCOUNTS
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              HASHTAGS
            </Typography>
            <Typography
              style={{
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              LEANGUAGE
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          style={{ color: "black", fontSize: "12px" }}
          xs={12}
          sm={12}
          md={12}
          lg={5}
        >
          © 2020 INSTAGRAM FROM FACEBOOK
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
