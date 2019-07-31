/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'moment-timezone';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/scss/main.scss';

import Header from './layouts/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import Create from './pages/Createarticle';
import VerifyAccount from './pages/VerifyAccount';
import Footer from './layouts/Footer';
import ReadArticle from './pages/ReadArticle';
import ResetPasswordRequest from './pages/ResetPasswordEmail';
import ApplyPassword from './pages/ApplyPasswordForm';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import SearchResults from './pages/SearchResults';
import Editarticle from './pages/Editarticle';
import MyArticles from './pages/MyArticles';

const App = () => (
  <BrowserRouter>
    <Header />
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/verify/:token" component={VerifyAccount} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/articles/:slug" component={ReadArticle} />
      <Route exact path="/resetPassword/:token" component={ApplyPassword} />
      <Route exact path="/resetPasswordRequest" component={ResetPasswordRequest} />
      <Route exact path="/profile/:username" component={Profile} />
      <Route exact path="/search" component={SearchResults} />
      <Route exact path="/articles" component={MyArticles} />
      <Route exact path="/article/new" component={Create} />
      <Route exact path="/article/:slug/edit" component={Editarticle} />
      <Route component={PageNotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
