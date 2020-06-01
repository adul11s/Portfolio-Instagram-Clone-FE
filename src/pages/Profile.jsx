import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import "../style/profile.css";
import ProfileTab from "../components/ProfileTab";
import Footer from "../components/Footer";
import { doLogout } from "../store/actions/loginAction";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const TransitionsModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
class Profile extends Component {
  componentDidMount = async () => {
    const signOut = async () => {
      await this.props.doLogout();
    };
  };

  render() {
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />
            <div style={{ marginTop: "100px" }}>
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar
                        style={{ height: "150px", width: "150px" }}
                      ></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          style={{
                            fontSize: "28px",
                            fontStyle: "bold",
                            marginRight: "20px",
                            alignItems: "center",
                          }}
                        >
                          username
                        </Typography>

                        <Button
                          variant="outlined"
                          style={{
                            height: "30px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginRight: "20px",
                          }}
                        >
                          Edit Profile
                        </Button>
                        <div>
                          <SettingsOutlinedIcon
                            style={{ fontSize: "24px" }}
                            onClick={TransitionsModal}
                          ></SettingsOutlinedIcon>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "19px",

                            marginRight: "30px",
                          }}
                        >
                          {" "}
                          Post
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "19px",

                            marginRight: "30px",
                          }}
                        >
                          followers
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "19px",

                            marginRight: "30px",
                          }}
                        >
                          following
                        </Typography>
                      </div>
                      <div style={{ textAlign: "left", marginTop: "20px" }}>
                        Full Name
                      </div>
                      <div style={{ textAlign: "left" }}>Bio</div>
                    </Grid>
                  </Grid>
                  <ProfileTab />
                </Grid>
              </Grid>
            </div>
            <Footer />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { message: "login ulang" },
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.login,
    logout: state.login.isLogin,
  };
};

const mapDispatchToProps = {
  doLogout: doLogout,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Profile));
