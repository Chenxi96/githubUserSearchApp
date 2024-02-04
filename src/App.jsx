import { useState, useEffect } from 'react'
import Moon from './assets/icon-moon.svg?react'
import Sun from './assets/icon-sun.svg?react'
import search from './assets/icon-search.svg'
import Profile from './components/Profile'
import './App.scss'

function App() {
  const [username, setUsername] = useState('octocat')
  const [result, setResult] = useState('')
  const [getProfile, setGetProfile] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => setProfile(data))
  }, [])

  useEffect(() => {
    getUser()
    if(getProfile) return getUserOnClick()
  }, [username, getProfile])

  const[profile, setProfile] = useState({})
  const[mode, setMode] = useState('lightMode')

  function getUser() {
      fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        if(data.message) {
          setResult('No results')
        } else {
          setResult('')
        }
      })
  }

  function getUserOnClick() {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setProfile(data))
    setGetProfile(false)
  }

  function lightDarkMode() {
    let element = document.body;
    element.classList.toggle('dark-mode-body')
    mode === 'lightMode' ? setMode('dark-mode') : setMode('lightMode')
  }
  
  return (
    <>
      <header>
        <h1 className={`${mode}`}>devfinder</h1>
        <div onClick={lightDarkMode} className={`light-mode ${mode}`}>
          <p className={`${mode}`}>{mode === 'dark-mode' ? 'LIGHT' : 'DARK'}</p>
          {mode === 'lightMode' ? <Moon className={mode} alt="" width={20} height={20} /> : <Sun className={mode} alt="" width={20} height={20} /> }
        </div>
      </header>
      <section className={`${mode}-input`}>
        <form action="">
          <div className='search-container'>
            <img src={search} alt="" width={20.048} height={20} />
            <input onChange={(event) => setUsername(event.target.value) } placeholder='Search GitHub username…' type="text" />
          </div>
          <div className='button-container'>
            {result && window.innerWidth > 1400 && <p className='no-result'>{result}</p>}
            <button className={`${mode}-btn`} onClick={(e) => {
              e.preventDefault()
              setGetProfile(true)
            }}>Search</button>
          </div>
        </form>
      </section>
      <article>
        <Profile mode={mode} profile={profile} />
      </article>
    </>
  )
}

export default App
