import './App.css'

//axios and react parts
import axios from 'axios';
import { useState, useEffect } from 'react'

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
    .then(() => {
      console.log(topics, "<<<<CURRENT TOPICS")
    })
  }, [])


  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <main>
        <ArticleManager topics={topics}/>
      </main>
    </>
  )
}

export default App
