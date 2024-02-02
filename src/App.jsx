import { useState, useEffect } from 'react'
import moon from './assets/icon-moon.svg'
import search from './assets/icon-search.svg'
import Profile from './components/Profile'
import './App.scss'

function App() {
  const[username, setUsername] = useState('octocat')

  useEffect(() => {
    getUser()
  }, [username])

  const[profile, setProfile] = useState({})

  function getUser() {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setProfile(data))
  }
  
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
          <input onChange={(event) => setUsername(event.target.value) } placeholder='Search GitHub username…' type="text" />
          <button onClick={getUser}>Search</button>
        </form>
      </section>
      <article>
        <Profile profile={profile} />
      </article>
    </>
  )
}

export default App
