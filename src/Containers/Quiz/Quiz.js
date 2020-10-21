import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../Components/AcitiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},

    isFinished: false,
    answerState: null,

    activeQuestion: 0,
    quiz: [
      {
        rightAnswerId: 3,
        question: "Question1",
        id: 1,
        answers: [
          {
            text: "Answer1",
            id: 1,
          },
          {
            text: "Answer2",
            id: 2,
          },
          {
            text: "Answer3",
            id: 3,
          },
          {
            text: "Answer4",
            id: 4,
          },
        ],
      },
      {
        rightAnswerId: 1,
        question: "Question1",
        id: 2,
        answers: [
          {
            text: "Answer1",
            id: 1,
          },
          {
            text: "Answer2",
            id: 2,
          },
          {
            text: "Answer3",
            id: 3,
          },
          {
            text: "Answer4",
            id: 4,
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }
    const results = this.state.results;

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 500);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
  };
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };
  componentDidMount() {
    console.log('Quiz ID = ', this.props.match.params.id)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer the following questions</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRepeat={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
