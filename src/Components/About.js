import { useState, useEffect, useRef } from'react'
export default function About({mode, setMode}) {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)]
    const scrollBy = (e) => {
        const target = e.target
        console.log('scrolltop is', target.scrollTop)
        const scrollDelta = parseFloat(target.dataset.prevScroll) - target.scrollTop
        target.dataset.prevScroll = target.scrollTop
        console.log('scroll amount is', scrollDelta)
        target.animate({
            transform: `translate3d(0px, ${scrollDelta * 5}px, 0px)`
        }, { duration: 1200, fill: "forwards", easing:'ease-in' })
    }

    return(
        <div className='about'>
            <div className='body'>
                <div className='wrapper'>
                    <div className='a-s'>
                        <div id='a-s-intro' className='a-s-cl'>
                            <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                            <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                            <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                            <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                            <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p>    
                        </div>
                        <div id='a-s-skills' className='a-s-cl'>
                            <h3>Tech Stack</h3>
                            <p>Javascript & Interactive Design</p>
                            <p>React</p>
                            <p>NodeJs</p>
                            <p>Python</p>
                        </div>
                        <div id='a-s-contact' className='a-s-cl'>
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
                        <div className='scroller'></div>
                    </div>
                    <div className='scrollable' onScroll= {(e) => scrollBy(e)} data-prev-scroll='0' data-prev-scroll-percent='0'>
                        <div className='a-m'>
                            <div id='a-m-intro' className='a-m-cl' ref={sectionRefs[0]}>
                                <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                                <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                                <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                                <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                                <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p> 
                            </div>
                            <div id='a-m-skills' className='a-m-cl' ref={sectionRefs[1]}>
                                <h3>Tech Stack</h3>
                                <p>Javascript & Interactive Design</p>
                                <p>React</p>
                                <p>NodeJs</p>
                                <p>Python</p>
                            </div>
                            <div id='a-m-contact' className='a-m-cl' ref={sectionRefs[2]}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}