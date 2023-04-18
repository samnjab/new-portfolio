export default function About({mode, setMode}) {
    return(
        <div className='about'>
           <header className="App-header">
                <div className='wrapper'>
                    <h1>
                        <span><span>S</span></span>
                        <span><span>a</span></span>
                        <span><span>m</span></span>
                        <span><span>J</span></span>
                    </h1>
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
            <div className='body'>
                <div className='wrapper'>
                    <section className='shadow'>
                        <div className='intro'>
                            <div className='wrapper'>
                                <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                                <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                                <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                                <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                                <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p>    
                            </div>
                        </div>
                        <div className='skills'>
                            <div className='wrapper'>
                                <h3>Tech Stack</h3>

                            </div>

                        </div>
                        <div className='contact'>
                            <div className='wrapper'>
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li><a href='https://github.com/samnjab' target='_blank'>Github</a></li>
                                    <li><a href='' target='_blank'>LinkedIn</a></li>
                                    <li><a href='' target='_blank'>Email</a></li>
                                </ul>

                            </div>

                        </div>
                    </section>
                    <section className='aboutMain'>
                        <div className='intro'>
                            <div className='wrapper'>
                                <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                                <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                                <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                                <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                                <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p> 
                            </div>
                        </div>
                        <div className='skills'>
                            <div className='wrapper'>
                                <h3>Tech Stack</h3>

                            </div>

                        </div>
                        <div className='contact'>
                            <div className='wrapper'>
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li><a href='https://github.com/samnjab' target='_blank'>Github</a></li>
                                    <li><a href='' target='_blank'>LinkedIn</a></li>
                                    <li><a href='' target='_blank'>Email</a></li>
                                </ul>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
            
        </div>
    )

}