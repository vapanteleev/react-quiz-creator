import React from "react";
import classes from "../AnswersList/AnswersList.module.css";
import AnswerItem from "../AnswersList/AnswerItem/AnswerItem";
const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      { props.answers.map((answer,index) => {
        return (
          <AnswerItem
             key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        )
      }) }
    </ul>
  )
}

export default AnswersList