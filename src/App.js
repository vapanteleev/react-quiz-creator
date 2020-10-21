import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./Containers/Quiz/Quiz";
import { Route, Switch } from "react-router-dom";
import QuizList from "./Containers/QuizList/QuizList";

import Auth from "./Containers/Auth/Auth";
import QuizCreator from "./Containers/QuizCreator/QuizCreator";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
