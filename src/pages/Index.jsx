import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Status from "../components/Status";
import { doLogout } from "../store/actions/loginAction";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import "../style/index.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CardSuggestion from "../components/CardSuggestion";
import SuggestionFix from "../components/SuggestionFix";
import Post from "../components/Post";
class Home extends Component {
  componentDidMount = async () => {};
  render() {
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />
            <div className="bg-index">
              <Grid container spacing={3}>
                <Grid item xs={7}>
                  <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                      <Card style={{ marginTop: "70px" }}>
                        <CardContent>
                          {/* masukin status */}
                          <Status />
                        </CardContent>
                      </Card>
                      {/* masukin post */}
                      <Post />
                      <Card
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        <CardContent>
                          <div style={{ display: "flex" }}>
                            <div>Suggestion For You</div>
                            <div style={{ marginLeft: "auto" }}>See All</div>
                          </div>

                          <CardSuggestion />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <SuggestionFix />
                </Grid>
              </Grid>
              <Footer />
            </div>
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
  doLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
