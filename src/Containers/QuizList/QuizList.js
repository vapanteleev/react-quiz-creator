import React, { Component } from "react";
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import axios from '../../axios/axios-quiz'
import Loader from '../../Components/UI/Loader/Loader'

class QuizList extends Component {
  state = {
    quizes: [],
    loading:true
  }
  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (<li key={quiz.id}><NavLink to={'/quiz/' +quiz.id}> {quiz.name}</NavLink></li> )
    })
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json')
      const quizes = []

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test number ${index + 1}`
        })
        
      })
    
      this.setState({
        quizes,
        loading:false
      })
    }catch (e) {
      console.log(e)
    }

   
    
  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div> 
          <h1>Список Тестов</h1>
          {this.state.loading ? <Loader/> : <ul>{this.renderQuizes()}</ul> }
          
          </div>
      </div>
    );
  }
}

export default QuizList;
