export default function About({mode, setMode}) {
    return(
        <div className='about'>
            <div className='body'>
                <div className='wrapper'>
                    <section className='shadow'>
                        <div className='intro'>
                            <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                            <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                            <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                            <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                            <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p>    
                        </div>
                        <div className='skills'>
                            <h3>Tech Stack</h3>
                            <p>Javascript & Interactive Design</p>
                            <p>React</p>
                            <p>NodeJs</p>
                            <p>Python</p>
                        </div>
                        <div className='contact'>
                            <h3>Get In Touch</h3>
                            <p class="intro-text">Ready to work together on a design project? Want me on your team, or just want to say hello, how are ya? Fill out the form.</p>
                            <fieldset>
                            <form action="submit" className="shadowForm"> 
                                <label htmlFor="name"class="sr-only">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" />
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input type="text" id="email" placeholder="Your Email" name="email" />
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea type="text" id="message" placeholder="Your Message" name="message" rows="8"></textarea>
                                <button>Inquire</button>
                            </form>
                            </fieldset>
                        </div>
                    </section>
                    <section className='aboutMainSection'>
                        <div className='intro'>
                            <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                            <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                            <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                            <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                            <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p> 
                        </div>
                        <div className='skills'>
                            <h3>Tech Stack</h3>
                            <p>Javascript & Interactive Design</p>
                            <p>React</p>
                            <p>NodeJs</p>
                            <p>Python</p>
                        </div>
                        <div className='contact'>
                            <h3>Get In Touch</h3>
                            <p class="intro-text">Ready to work together on a design project? Want me on your team, or just want to say hello, how are ya? Fill out the form.</p>
                            <fieldset>
                            <form action="submit">
                                <label htmlFor="name"class="sr-only">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" />
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input type="text" id="email" placeholder="Your Email" name="email" />
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea type="text" id="message" placeholder="Your Message" name="message" rows="8"></textarea>
                                <button>Inquire</button>
                            </form>
                            </fieldset>

                        </div>
                    </section>
                </div>
            </div>
            
        </div>
    )

}