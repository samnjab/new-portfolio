import { useState, useEffect } from 'react'
import Projects from './Components/Projects'
import About from './Components/About'
import './App.css'
function App() {
  const [load, setLoad] = useState(0)
  const [mode, setMode] = useState(true)
  useEffect(() => {
    if (load < 101){
      let delay = Math.random()* 200
      setTimeout(() => {
        setLoad(load + 1)
      }, delay)
    }
  }, [load])
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
          <section className='main'>
            {
              mode ?
              <Projects mode={mode} setMode={setMode}/>
              :
              <About mode={mode} setMode={setMode}/>
            }
          </section>
      }
      
    </div>
  );
}

export default App;
