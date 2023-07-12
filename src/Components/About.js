import { useState, useEffect, useRef } from'react'
export default function About({mode, setMode}) {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)]
    const scrollBy = (e) => {
        const parentDiv = document.querySelector('.a-m')
        parentDiv.dataset.globalScrollPosition = parseFloat(parentDiv.dataset.globalScrollPosition + e.delta.Y)
        if (parentDiv.dataset.globalScrollPosition >= sectionRefs[0].current.clientHeight){
            console.log('scrollposition increasing,')
            if (sectionRefs[1].current.dataset.scrollPosition <= -parentDiv.clientHeight){
                sectionRefs[0].current.dataset.scrollPosition = Math.max(Math.min(parseFloat(sectionRefs[0].current.dataset.scrollPosition) + e.deltaY, sectionRefs[0].current.clientHeight + 20), -(parentDiv.clientHeight))
                console.log('deltaY is', e.deltaY, 'intro scroll position', sectionRefs[0].current.dataset.scrollPosition)
            } else {
                sectionRefs[1].current.dataset.scrollPosition = Math.max(Math.min(parseFloat(sectionRefs[1].current.dataset.scrollPosition) + e.deltaY, sectionRefs[1].current.clientHeight + sectionRefs[0].current.clientHeight), -(parentDiv.clientHeight))
                console.log('skills scroll position', sectionRefs[1].current.dataset.scrollPosition)
                sectionRefs[1].current.animate({
                    transform: `translate3d(0px, ${-sectionRefs[1].current.dataset.scrollPosition}px, 0px)`
                }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
            }
        } else if (parentDiv.dataset.globalScrollPosition < sectionRefs[0].current.clientHeight){
            console.log('scrollposition increasing, havent reached intro max ')
            sectionRefs[0].current.dataset.scrollPosition = Math.max(Math.min(parseFloat(sectionRefs[0].current.dataset.scrollPosition) + e.deltaY, sectionRefs[0].current.clientHeight), -(parentDiv.clientHeight))
            console.log('deltaY is', e.deltaY, 'intro scroll position', sectionRefs[0].current.dataset.scrollPosition)
            sectionRefs[0].current.animate({
                transform: `translate3d(0px, ${-sectionRefs[0].current.dataset.scrollPosition}px, 0px)`
            }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        }

        // let newScrollPosition = e.deltaY + parseFloat(parentDiv.dataset.prevScroll)
        // console.log('new scroll position', newScrollPosition)
        // parentDiv.dataset.prevScroll = newScrollPosition
        // if (newScrollPosition >= parentDiv.clientHeight + window.innerHeight/2){
        //     console.log('entered the grey zone', 'mod', newScrollPosition % parentDiv.clientHeight)
        //     newScrollPosition = newScrollPosition % parentDiv.clientHeight
        //     parentDiv.dataset.prevScroll = newScrollPosition
        //     sectionRefs[0].current.animate({
        //         transform: `translate3d(0px, ${newScrollPosition}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[1].current.animate({
        //         transform: `translate3d(0px, ${newScrollPosition}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[2].current.animate({
        //         transform: `translate3d(0px, ${newScrollPosition}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        // }
        // else if (newScrollPosition > sectionRefs[0].current.clientHeight + sectionRefs[1].current.clientHeight/2){
        //     console.log('inside 3rd if')
        //     sectionRefs[0].current.animate({
        //         transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[1].current.animate({
        //         transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[2].current.animate({
        //         transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        // }
        // else if (newScrollPosition > sectionRefs[0].current.clientHeight/2 && newScrollPosition < sectionRefs[0].current.clientHeight 
        // + sectionRefs[1].current.clientHeight/2){
        //     console.log('inside 2nd if')
        //     sectionRefs[0].current.animate({
        //     transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
        //     }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[1].current.animate({
        //     transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
        //     }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        // }
        // else if (newScrollPosition === 0){
        //     sectionRefs[0].current.animate({
        //         transform: `translate3d(0px, ${0}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[1].current.animate({
        //         transform: `translate3d(0px, ${sectionRefs[0].clientHeight - window.innerHeight}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        //     sectionRefs[2].current.animate({
        //         transform: `translate3d(0px, ${sectionRefs[0].clientHeight - window.innerHeight + sectionRefs[1].clientHeight}px, 0px)`
        //         }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        // }
        // else if (newScrollPosition < sectionRefs[0].current.clientHeight/2){
        //     console.log('inside first if')
        //     sectionRefs[0].current.animate({
        //     transform: `translate3d(0px, ${-newScrollPosition}px, 0px)`
        //     }, { duration: 1200, fill: "forwards", easing:'cubic-bezier(.56,.22,.47,.9)' })
        // }
        
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
                    <div className='scrollable' id='scrollable' onWheel = {(e) => scrollBy(e)}>
                        <div className='a-m' data-global-scroll-position = {0}>
                            <div id='a-m-intro' className='a-m-cl' ref={sectionRefs[0]} data-scroll-position={0} style={{'transform':'translate3d(0px, 0px, 0px)'}}>
                                <p>Sam is an Interactive Digital Creater based in Toronto. She specializes in creating visual experiences with a strong focus on interaction. </p> 
                                <p> Sam is of Persian and Turkish descent, and grew up in a small town near Tehran where she excelled at mathematics and computer science. She moved to Toronto at 17 to attend the University of Toronto where she majored in Neuroscience.</p>
                                <p>Aside from being a tech creator, Sam is a music fanatic, avid boxer and reader.</p>
                                <p>Few things in life however, have topped her number one obsession: turning complex problems into elegant solutions.</p>
                                <p>Sam is a graduate of Juno College of Technology (formerly HackerYou) Web Development Bootcamp. A unique combination of technical skills and a deep understanding of the human psychology drives her endless quest to uncover what makes us tick. </p> 
                            </div>
                            <div id='a-m-skills' className='a-m-cl' ref={sectionRefs[1]} data-scroll-position={0} style={{'transform':`translate3d(0px, ${sectionRefs[0].clientHeight - window.innerHeight}, 0px)`}}>
                                <h3>Tech Stack</h3>
                                <p>Javascript & Interactive Design</p>
                                <p>React</p>
                                <p>NodeJs</p>
                                <p>Python</p>
                            </div>
                            <div id='a-m-contact' className='a-m-cl' ref={sectionRefs[2]} data-scroll-position={0} style={{'transform':`translate3d(0px, ${sectionRefs[0].clientHeight - window.innerHeight + sectionRefs[1].clientHeight}, 0px)`}}>
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