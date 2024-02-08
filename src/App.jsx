import './App.css'

//react parts
import { useState } from 'react'
import { Routes, Route, Link, useSearchParams } from 'react-router-dom';

//Components
import Header from './components/Header'
import Navigation from './components/Navigation'
import ArticleManager from './components/ArticleManager'
import ArticleFullCard from './components/ArticleFullCard'



function App() {

//creating state
const [isLoading, setIsLoading] = useState(true);

/////
const [searchParams, setSearchParams] = useSearchParams();

////////
const [filterUpdated, setFilterUpdated] = useState(false);

///////


////

  return (
    <>
      <header className="container is-fluid ">
        <Link to={'/'}>
        <Header />
        </Link>
        <Navigation searchParams={searchParams} setSearchParams={setSearchParams} setFilterUpdated={setFilterUpdated} />
      </header>
      <main className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-half">
            <Routes>

              <Route path='/' element={<ArticleManager isLoading={isLoading} setIsLoading={setIsLoading}  searchParams={searchParams}  filterUpdated={filterUpdated} setFilterUpdated={setFilterUpdated} />} />

              <Route path='/:article_id' element={<ArticleFullCard isLoading={isLoading} setIsLoading={setIsLoading} />} />

              <Route path='/topics/:slug' element={<ArticleManager isLoading={isLoading} setIsLoading={setIsLoading} searchParams={searchParams}  filterUpdated={filterUpdated} setFilterUpdated={setFilterUpdated} />}/>

            </Routes>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
