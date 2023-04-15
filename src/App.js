import { useState, useEffect } from 'react'
import Projects from './Components/Projects'
import About from './Components/About'
import './App.css'
function App() {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <div className='transition-background'></div>
      <section className='main'>
        {
          mode ?
          <Projects mode={mode} setMode={setMode}/>
          :
          <About mode={mode} setMode={setMode}/>
        }

      </section>
    </div>
  );
}

export default App;
