import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import PageNotFound from './PageNotFound';
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import MySubjects from './subjects/MySubjects';
import TutorialPage from './topics/TutorialPage';


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoutes path="/subject-list" component={MySubjects} />
          <PrivateRoutes path="/start-learning" component={TutorialPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;