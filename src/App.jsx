import './App.css'

//axios and react parts
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header'
import Navigation from './components/Navigation'
import ArticleManager from './components/ArticleManager'

//STATES CREATED HERE:
//topics, filterQueries

function App() {

//creating state
const [topics, setTopics] = useState([]);

//fetch of all topics
  useEffect(() => {
    axios
    .get('https://ncnews-lh66.onrender.com/api/topics')
    .then((response) => {
      return response.data.topics
    })
    .then((response) => {
      setTopics(response)
    })
  }, [])


  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <Routes>
        <Route path='/' element={<ArticleManager topics={topics}/>} />
      </Routes>
    </>
  )
}

export default App
