import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom'

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[quizItem.id]],
          ];
          return (
            <li ley={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")}></i>
            </li>
          );
        })}
      </ul>
      <p>
        Right Right is {successCount} of {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRepeat} type="primary">
          Restart
        </Button>
        <Link to='/'>
        <Button onClick={props.onRepeat} type="success">
            move to the test list
        </Button>
          </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
