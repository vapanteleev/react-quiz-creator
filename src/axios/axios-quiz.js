import axios from 'axios'

export default axios.create({
    baseURL:'https://quiz-creator-bf789.firebaseio.com/'
})