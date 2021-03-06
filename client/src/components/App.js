import React, { Suspense } from 'react';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadPage from './views/UploadPage/UploadPage';
import DetailBoardPage from './views/DetailBoardPage/DetailBoardPage';
import UserBoardPage from './views/UserBoardPage/UserBoardPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        {/* <BrowserRouter> */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(UploadPage, true)} />
          <Route exact path="/board/:boardId" component={Auth(DetailBoardPage, true)} />
          <Route exact path="/:userId/user_board" component={Auth(UserBoardPage, true)} />

        </Switch>
        {/* </BrowserRouter> */}
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
