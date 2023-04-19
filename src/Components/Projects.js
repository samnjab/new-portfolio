import { useState, useEffect } from 'react'
import Campaign from './Project'
import cover1 from '../assets/euphonia.jpg'
import cover2 from '../assets/typewriter.jpeg'
import cover3 from '../assets/thegame.jpeg'
import vid1 from '../assets/e3.mp4'
import vid2 from '../assets/Acrolix.mp4'
import vid3 from '../assets/Game.mp4'
export default function Projects({ campaignMode, setCampaignMode }) {
    const [projects, setProjects] = useState([])
    const [focus, setFocus] = useState([])
    const [x, setX] = useState(0)

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
        console.log('campaign mode on launch', campaignMode)


    },[])
    const handleFocus = (project) => {
        const order = [...projects]
        for (let i=0;i < projects.indexOf(project); i++){
            order.push(order.shift(order[i]))
        }
        setFocus(order)
    }
    useEffect(() => {
        if (focus.length === 0) return
        console.log('setting focus') 
        setCampaignMode(true)
    }, [focus])
    // Track Scroll Logic
    useEffect(() => {
        if (campaignMode) return
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
        section.onscroll = (e) => {
            const scrollDelta = parseFloat(track.dataset.prevScroll) - e.target.scrollLeft
            const maxScrollDelta = window.innerWidth / 2 
            const percentage = 2 * (scrollDelta / maxScrollDelta) * 100
            const nextPercentageUnconstrained = parseFloat(track.dataset.percentScroll) + percentage
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
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
    },[campaignMode])
    useEffect(() => {
        if (!campaignMode) return
        const campaigns = document.querySelector('.campaigns')
        campaigns.scrollLeft += (campaigns.scrollWidth - document.body.clientWidth) / 2
        campaigns.onscroll = () => {
            setX(campaigns.scrollLeft)
        }
    }, [campaignMode])
    useEffect(() => {
        if (x === 0) return
        setCampaignMode(false)
    }, [x])
    
    return(
        <>
            {   focus.length !== 0 && campaignMode ?
                projects.length !== 0 ?
                <div className='campaigns'>
                    {     
                    focus.map(project => {
                        return <Campaign project={project} />
                    })
                    }
                </div>
                :
                <></>
                :
                <>
                    <div className='projects'>
                        {console.log('campaign mode', campaignMode)}
                        <div id='expand'><p>+</p></div>
                        <div id='projectTrack' data-mouse-down-at='0' data-prev-percentage='0' data-prev-scroll='0' data-percent-scroll='0'>
                            { projects.map(project => {
                                return (
                                    <div className='projectContainer'>
                                        <div className='img-box' onClick={() => {
                                            handleFocus(project)
                                            }}>
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
        </>
    )

}