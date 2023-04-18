import { useState, useEffect } from 'react'
import ProjectC from './Project'
import cover1 from '../assets/euphonia.jpg'
import cover2 from '../assets/typewriter.jpeg'
import cover3 from '../assets/thegame.jpeg'
import vid1 from '../assets/e3.mp4'
import vid2 from '../assets/Acrolix.mp4'
import vid3 from '../assets/Game.mp4'
export default function Projects({ mode, setMode}) {
    const [projects, setProjects] = useState([])
    const [focus, setFocus] = useState([])

    class Project{
        constructor(title, description, liveLink, github, vidSrc, coverSrc){
            this.title = title
            this.description = description
            this.liveLink = liveLink
            this.github = github
            this.vidSrc = vidSrc
            this.coverSrc = coverSrc
        }
    }
    useEffect(() => {
        const titles = ['Euphonia', 'Acrolix', 'The Game']
        const descriptions = [
            "Do you like the sweet sound of synthesizers? Does electronic music make your heart sing? Are you in love? Are you heartbroken? Checkout Euphonia. Find your next favourite tune.",
            "Whether you're looking for a catchy name for your business, a memorable slogan for your brand, or just a fun way to play with words, Acrolix is the perfect tool. With a sleek interface, you can start generating creative backronyms in just a few taps.",
            'Come watch The Game with us.',
        ]
        const liveLinks =[
            'https://euphonia3.vercel.app/',
            'https://acrolix.netlify.app/',
            'thegame101.netlify.app'
        ]
        const githubs = [
            'https://github.com/samnjab/euphonia3',
            'https://github.com/samnjab/Acrolix',
            'https://github.com/samnjab/theGame'
        ]
        const videoSrcs = [vid1, vid2, vid3]
        const coverSrcs = [cover1, cover2, cover3]
        setProjects(
            titles.map((title, i) => {
                let project = new Project(title, descriptions[i], liveLinks[i], githubs[i], videoSrcs[i], coverSrcs[i])
                return project
            })
        )


    },[])
    const handleFocus = (project) => {
        const order = [...projects]
        for (let i=0;i < projects.indexOf(project); i++){
            order.push(order.shift(order[i]))
        }
        setFocus(order)
    }
    // Track Scroll Logic
    useEffect(() => {
        const track = document.getElementById('projectTrack')
        window.onmousedown = e => {
            track.dataset.mouseDownAt = e.clientX
        }
        window.onmousemove = e => {
            if(track.dataset.mouseDownAt === "0") return
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX 
            const maxDelta = window.innerWidth / 2 
            const percentage = (mouseDelta / maxDelta) * -100
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
            track.dataset.percentage = nextPercentage
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" })
            for(const image of track.getElementsByClassName('image')) {
                image.animate({
                objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }
        window.onmouseup =() => {
            track.dataset.mouseDownAt = '0'
            track.dataset.prevPercentage = track.dataset.percentage
        }

        const section = document.querySelector('.projects')
        console.log(section)
        console.log(section.offsetWidth)
        section.onscroll = (e) => {
            console.log(e.target.scrollLeft)
            const scrollDelta = parseFloat(track.dataset.prevScroll) - e.target.scrollLeft
            const maxScrollDelta = window.innerWidth / 2 
            const percentage = 2 * (scrollDelta / maxScrollDelta) * 100
            const nextPercentageUnconstrained = parseFloat(track.dataset.percentScroll) + percentage
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
            console.log('next percent is', nextPercentage)
            console.log('max scroll', maxScrollDelta)
            track.dataset.percentScroll = nextPercentage
            track.dataset.prevScroll = e.target.scrollLeft 
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" })
            for(const image of track.getElementsByClassName('image')) {
                image.animate({
                objectPosition: `${(100 + nextPercentage)}% center`
                }, { duration: 1200, fill: "forwards" });
            }

    }

    },[])
    
    
    return(
        <>
            {   focus.length !== 0 ?
                projects.length !== 0 ?
                <div className='campaigns'>
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
                    {     
                    focus.map(project => {
                        return <ProjectC project={project} />
                    })
                    }
                    
                </div>
                :
                <></>
                :
                <>
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
                    <div className='projects'>
                        <div id='expand'><p>+</p></div>
                        <div id='projectTrack' data-mouse-down-at='0' data-prev-percentage='0' data-prev-scroll='0' data-percent-scroll='0'>
                            { projects.map(project => {
                                return (
                                    <div className='projectContainer'>
                                        <div className='img-box' onClick={() => handleFocus(project)}>
                                            {/* <div className='overlay'></div> */}
                                            <img src={project.coverSrc} className='image' draggable='false'></img>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            }
            <footer>
                <div className='wrapper'>
                    <div className='intro'>
                        <p>Developer</p>
                        <p>Available Apr.2023</p>
                    </div>
                    <div className='contact'>
                        <a href=''>Github</a>
                        <a href=''>LinkedIn</a>
                    </div>
                </div>
            </footer>
        </>
    )

}