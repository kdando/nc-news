import './App.css'

//axios and react parts
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

//Components
import Header from './components/Header'
import Navigation from './components/Navigation'
import ArticleManager from './components/ArticleManager'
import ArticleFullCard from './components/ArticleFullCard'

//STATES CREATED HERE:
//topics, filterQueries

function App() {

//creating state
// const [topics, setTopics] = useState([]);
const [isLoading, setIsLoading] = useState(true);

//fetch of all topics
  // useEffect(() => {
  //   axios
  //   .get('https://ncnews-lh66.onrender.com/api/topics')
  //   .then((response) => {
  //     return response.data.topics
  //   })
  //   .then((response) => {
  //     setTopics(response)
  //   })
  // }, [])


  return (
    <>
      <header className="container is-fluid">
        {/* <Link to={'/'}>
        <Header />
        </Link> */}
        <Navigation />
      </header>
      <main className="container is-fluid">
      <Routes>
        <Route path='/' element={<ArticleManager setIsLoading={setIsLoading}/>} />
        <Route path='/:article_id' element={<ArticleFullCard isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
      </main>
    </>
  )
}

export default App
