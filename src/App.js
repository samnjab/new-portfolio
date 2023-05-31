import { useState, useEffect, useRef } from 'react'
import Projects from './Components/Projects'
import About from './Components/About'
import './App.css'
function App() {
  const [load, setLoad] = useState(0)
  const [mode, setMode] = useState(true)
  const [campaignMode, setCampaignMode] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const themeMem = useRef(theme)
  useEffect(() => {
    if (load < 101){
      let delay = Math.random()* 200
      setTimeout(() => {
        setLoad(load + 1)
      }, delay)
    }
  }, [load])
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = localStorage.getItem('theme');
  }, [theme])
  return (
    <div className="App">
      <div className='transition-background'></div>
      {
        load <= 100 ?
         <header className="App-header">
            <div className='wrapper'>
                <h1>{load}</h1>
            </div>
          </header>
          :
          <>
          <header className={campaignMode ? 'campaignHeader' : 'App-header'}>
              <div className='wrapper'>
                  <h1>
                      <span><span>S</span></span>
                      <span><span>a</span></span>
                      <span><span>m</span></span>
                      <span><span>J</span></span>
                  </h1>
                  <div className='theme'>
                    {
                      theme === 'dark' ?
                      <button 
                      className='lightTheme'
                      onClick={() => {
                        setTheme('light')
                        themeMem.current = 'light'
                      }}
                      >
                      <div className="theSun">
                    </div>
                      </button>
                      :
                      <button 
                      className='darkTheme'
                      onClick={() => {
                        setTheme('dark')
                        themeMem.current = 'dark'
                      }}
                      >
                        <div className='moon'></div>
                      </button>
                    }
                  </div>
                  <nav>
                      <a 
                      className='nav'
                      onClick={() => setMode(!mode)}
                      >
                          {
                          mode ?
                          <p>About</p>
                          :
                          <p>Projects</p>
                          }
                      </a>
                  </nav>
              </div>
            </header>
            <section className={`main ${campaignMode ? 'campaignMain' : ''} ${!mode ? 'aboutMain': '' }`}>
              {
                mode ?
                <Projects mode={mode} setCampaignMode={setCampaignMode} campaignMode={campaignMode} theme={theme} setTheme={setTheme} themeMem={themeMem}/>
                :
                <About mode={mode} setMode={setMode}/>
              }
            </section>
            {
              campaignMode ? 
              <></>
              :
              <footer>
                  <div className='wrapper'>
                      <div className='intro'>
                          <p>Developer</p>
                          <p>Available Apr.2023</p>
                      </div>
                      <div className='contact'>
                          <a href='https://github.com/samnjab'>Github</a>
                          <a href='https://www.linkedin.com/in/sam-jaberi-310b92257/'>LinkedIn</a>
                          <a href='https://medium.com/@samanjaberi.sj'>Medium</a>
                      </div>
                  </div>
              </footer>
            }
          </>
      }
      
    </div>
  );
}

export default App;
