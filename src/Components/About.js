import { useState, useEffect, useRef } from'react'
export default function About({mode, setMode}) {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)]
    const scrollBy = (e) => {
        const parentDiv = document.querySelector('.a-m')
        console.log('deltaY is', e.deltaY, 'parent div', parentDiv.dataset)
        const newScrollPosition = e.deltaY + parseFloat(parentDiv.dataset.prevScroll)
        console.log('new scroll position', newScrollPosition)
        parentDiv.dataset.prevScroll = newScrollPosition
        if (newScrollPosition < sectionRefs[0].current.clientHeight/2){
            console.log('inside first if')
            sectionRefs[0].current.animate({
            transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
            }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.52,.17,.49,.87)' })
        }
        else if (newScrollPosition> sectionRefs[0].current.clientHeight/2 && newScrollPosition < sectionRefs[0].current.clientHeight 
        + sectionRefs[1].current.clientHeight/2){
            console.log('inside 2nd if')
            sectionRefs[0].current.animate({
            transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
            }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.52,.17,.49,.87)' })
            sectionRefs[1].current.animate({
            transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
            }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.52,.17,.49,.87)' })
        }
        else if (newScrollPosition > sectionRefs[0].current.clientHeight + sectionRefs[1].current.clientHeight/2){
            console.log('inside 3rd if')
            sectionRefs[0].current.animate({
                transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
                }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.52,.17,.49,.87)' })
            sectionRefs[1].current.animate({
                transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
                }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.52,.17,.49,.87)' })
            sectionRefs[2].current.animate({
                transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
                }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.52,.17,.49,.87)' })
        }
        else if(newScrollPosition > sectionRefs[0].current.clientHeight + sectionRefs[1].current.clientHeight + sectionRefs[2].current.clientHeight){

        }
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
                    <div className='scrollable' id='scrollable' onWheel= {(e) => scrollBy(e)}>
                        <div className='a-m' data-prev-scroll = '0'>
                            <div id='a-m-intro' className='a-m-cl' ref={sectionRefs[0]} style={{'transform':'translate3d(0px, 0px, 0px)'}}>
                                <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                                <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                                <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                                <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                                <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p> 
                            </div>
                            <div id='a-m-skills' className='a-m-cl' ref={sectionRefs[1]} style={{'transform':'translate3d(0px, 0px, 0px)'}}>
                                <h3>Tech Stack</h3>
                                <p>Javascript & Interactive Design</p>
                                <p>React</p>
                                <p>NodeJs</p>
                                <p>Python</p>
                            </div>
                            <div id='a-m-contact' className='a-m-cl' ref={sectionRefs[2]} style={{'transform':'translate3d(0px, 0px, 0px)'}}>
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