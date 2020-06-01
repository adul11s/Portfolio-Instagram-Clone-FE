import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../style/signin.css";
import FacebookIcon from "@material-ui/icons/Facebook";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "70vh",
    marginTop: "40px",
  },
  image: {
    backgroundImage: "url(../images/image-background-register.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "end",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSide = (props) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={false}
        md={false}
        lg={6}
        className={classes.image}
      >
        {/* <div className="bg-register">
          <img
            src={require("../images/carousel-register-1.jpg")}
            alt=""
            className="gambar-register"
          />
        </div> */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        component={Paper}
        elevation={3}
        square
      >
        <div className={classes.paper}>
          <img src={require("../images/logo.png")} alt="" />
          <form
            className={classes.form}
            noValidate
            onSubmit={(el) => el.preventDefault()}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="@username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(el) => props.changeInput(el)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(el) => props.changeInput(el)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => props.login()}
            >
              Sign In
            </Button>
            <div class="separator">OR</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              <FacebookIcon style={{ color: "blue" }}></FacebookIcon>
              <Typography>Log in with Facebook</Typography>
            </div>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </form>
        </div>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={require("../images/apple.png")}
            alt=""
            style={{
              width: "134px",
              height: "40px",
              marginRight: "20px",
            }}
          />
          <img
            src={require("../images/google.png")}
            alt=""
            style={{ width: "134px", height: "40px" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
