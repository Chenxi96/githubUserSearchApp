import { useState, useEffect } from 'react'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'
import search from './assets/icon-search.svg'
import Profile from './components/Profile'
import './App.scss'

function App() {
  const[username, setUsername] = useState('octocat')
  const[result, setResult] = useState('')
  useEffect(() => {
    getUser()
    return () => getUser()
  }, [username, result])

  const[profile, setProfile] = useState({})
  const[mode, setMode] = useState('lightMode')

  function getUser() {
      fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        if(data.message) {
          setResult('No results')
        } else {
          setProfile(data)
          setResult('')
        }
      })
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
          {mode === 'lightMode' ? <img src={moon} alt="" width={20} height={20} />: <img src={sun} alt="" /> }
        </div>
      </header>
      <section className={`${mode}-input`}>
        <form action="">
          <div className='search-container'>
            <img src={search} alt="" width={20.048} height={20} />
            <input onChange={(event) => setUsername(event.target.value) } placeholder='Search GitHub username…' type="text" />
          </div>
          <div className='button-container'>
            {result && <p className='no-result'>{result}</p>}
            <button onClick={getUser}>Search</button>
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
