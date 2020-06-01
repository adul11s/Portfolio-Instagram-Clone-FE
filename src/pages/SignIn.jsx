import React from "react";
import SignInSide from "../components/SingInSide";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/loginAction";

class SignIn extends React.Component {
  login = async () => {
    await this.props.doLogin();
    const isLogin = this.props.isLogin;
    console.log(isLogin);
    if (isLogin) {
      this.props.history.push("/profile");
    }
  };
  render() {
    const message = this.props.location.state
      ? this.props.location.state.message
      : "masukkan username dan password";
    return (
      <React.Fragment>
        <SignInSide {...this.props} login={() => this.login} />
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    password: state.login.password,
    isLogin: state.login,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
