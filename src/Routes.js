import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlbumDetail from "./Conponents/AlbumDetail/AlbumDetail";
import Footer from "./Conponents/Footer/Footer";
import Nav from "./Conponents/Nav/Nav";
import PlayBar from "./Conponents/PlayBar/PlayBar";
import Chart from "./Pages/Chart/Chart";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import Storage from "./Pages/Storage/Storage";
import GenreDetail from "./Pages/GenreDetail/GenreDetail";
import SituationDetail from "./Conponents/SituationDetail/SituationDetail";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/albumDetail" component={AlbumDetail} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/storage" component={Storage} />
          <Route exact path="/genredetail" component={GenreDetail} />
          <Route exact path="/situationdetail" component={SituationDetail} />
        </Switch>
        <Footer />
        <PlayBar />
      </Router>
    );
  }
}
export default Routes;
