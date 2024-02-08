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
const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <header className="container is-fluid ">
        <Link to={'/'}>
        <Header />
        </Link>
        <Navigation />
      </header>
      <main className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-half">
            <Routes>
              
              <Route path='/' element={<ArticleManager isLoading={isLoading} setIsLoading={setIsLoading}/>} />

              <Route path='/:article_id' element={<ArticleFullCard isLoading={isLoading} setIsLoading={setIsLoading} />} />

              <Route path='/topics/:slug' element={<ArticleManager isLoading={isLoading} setIsLoading={setIsLoading} />}/>

            </Routes>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
