// import React, { Component } from "react";
// import Navbar from "../components/Navbar";
// import { doLogout } from "../store/actions/loginAction";
// import { Redirect, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import Footer from "../components/Footer";

// class Home extends Component {
//   componentDidMount = async () => {};
//   render() {
//     return (
//       <div>
//         {localStorage.getItem("isLogin") ? (
//           <React.Fragment>
//             <Navbar />
//             <div className="bg-index"></div>
//             <Footer />
//           </React.Fragment>
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signin",
//               state: { message: "login ulang" },
//             }}
//           />
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     dataUser: state.login,
//     dataUser: state.login,
//     logout: state.login.isLogin,
//   };
// };

// const mapDispatchToProps = {
//   doLogout,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
