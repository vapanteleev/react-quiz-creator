import React, { Component } from "react";
import classes from './QuizCreator.module.css'
import Button from '../../Components/UI/Button/Button'
import {createControl}  from '../../form/formFramework'
import Input from '../../Components/UI/input/Input'
import Auxillary from '../../hoc/auxillary/Auxillary'
import Select from '../../Components/select/Select'
function createOptionControl(number) {
  return createControl({
    
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',

      },{required:true}
  )
}

function createFormContros() {
  return {
      quistion: createControl({
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым'
      }, {required:true}),
      option1:createOptionControl(1) ,
      option2: createOptionControl(2),
      option3: createOptionControl(3),
      option4: createOptionControl(4),

    }
}
class QuizCreator extends Component {
  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {
    
  }

  createQuizHandler = () => {
    
  }
  сhangeHandler = () => {
    
  }
  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Auxillary key = {controlName+index}>
        <Input
          label={control.label}
          value={control.value}
          valid={control.valid}
          shouldValidate={!!control.validation}
          touched={control.touched}
          errorMessage={control.errorMessage}
          onChange={event => this.changeHandler(event.target.value, controlName)}
        />
          { index === 0 ? <hr /> : null}
          </Auxillary>
      )
    })
  }
  state = {
    quiz: [],
    rightAnswer:1,
    formControls: createFormContros()
  };
  selectChangeHandler = event => {
    console.log(event.target.value)
  }
  render() {
    const select = <Select
      label='Choose right Answer'
      value={this.state.rightAnswer}
      onChange={this.selectChangeHandler}
      options={[{ text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        {text:4, value:4}
      ]}
    />
    return (
      <div className={classes.QuizCreator}>
        <div>        <h1>Создание теста</h1></div>
        <form onSubmit={this.submitHandler} className={classes.QuizCreatorForm}>
          {this.renderControls()}
          
         

          
        {select}
          <Button type='primary'
            onClick={this.addQuestionHandler}
          > Добавить вопрос</Button>

           <Button type='success'
            onClick={this.createQuizHandler}
          > Создать тест</Button>
        </form>
      </div>
    );
  }
}

export default QuizCreator;
