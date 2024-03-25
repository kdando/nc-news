//React and React Router parts
import { useState } from 'react'
import { Routes, Route, Link, useSearchParams } from 'react-router-dom';

//Components
import Navigation from './components/Navigation'
import ArticleManager from './components/ArticleManager'
import ArticleFullCard from './components/ArticleFullCard'
import Error from './components/Error'

//Styling
import './App.css'
import SwitchUser from './components/SwitchUser';


export default function App() {

//STATES
const [isLoading, setIsLoading] = useState(true);
const [filterUpdated, setFilterUpdated] = useState(false);

//SEARCH PARAMS
const [searchParams, setSearchParams] = useSearchParams();


  return (
    <>
      <header>
        <Navigation searchParams={searchParams} setSearchParams={setSearchParams} setFilterUpdated={setFilterUpdated} />
      </header>
      <main className="container is-fluid columns is-centered">
       
          <div className="column is-two-fifths">
            <Routes>

              <Route path='/' element={<ArticleManager isLoading={isLoading} setIsLoading={setIsLoading}  searchParams={searchParams}  filterUpdated={filterUpdated} setFilterUpdated={setFilterUpdated} />} />

              <Route path='/articles/:article_id' element={<ArticleFullCard isLoading={isLoading} setIsLoading={setIsLoading} />} />

              <Route path='/switch-user' element={<SwitchUser isLoading={isLoading} setIsLoading={setIsLoading} />} />

              <Route path='*' element={<Error />} />

            </Routes>
          </div>
        
      </main>
    </>
  )

}