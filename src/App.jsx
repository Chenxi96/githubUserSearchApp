import { useState } from 'react'
import moon from './assets/icon-moon.svg'
import search from './assets/icon-search.svg'
import './App.scss'

function App() {

  return (
    <>
      <header>
        <h1>devfinder</h1>
        <div className='light-mode'>
          <p>Dark</p>
          <img src={moon} alt="" width={20} height={20} />
        </div>
      </header>
      <section>
        <form action="">
          <img src={search} alt="" width={20.048} height={20} />
          <input placeholder='Search GitHub username…' type="text" />
          <button>Search</button>
        </form>
      </section>
      <article></article>
    </>
  )
}

export default App
