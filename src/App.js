import { useState, useEffect } from 'react'
import Projects from './Components/Projects'
import About from './Components/About'
import './App.css'
function App() {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <div className='transition-background'>

      </div>
      <header className="App-header">
        <h1>Sam J</h1>
        <div className='files'>

        </div>
        <button 
        className='nav'
        onClick={() => setMode(!mode)}
        >
          {
            mode ?
            <p>About</p>
            :
            <p>Projects</p>
          }
        </button>
      </header>
      <section className='main'>
        {
          mode ?
          <Projects />
          :
          <About />
        }

      </section>
    </div>
  );
}

export default App;
