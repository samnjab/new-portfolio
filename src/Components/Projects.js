import { useState, useEffect, useRef } from 'react'
import Campaign from './Project'
import cover1 from '../assets/euphonia.jpg'
import cover2 from '../assets/typewriter.jpeg'
import cover3 from '../assets/thegame.jpeg'
import vid1 from '../assets/e3.mp4'
import vid2 from '../assets/Acrolix.mp4'
import vid3 from '../assets/Game.mp4'
import bwCover1 from '../assets/euphonia2.JPG'
import bwCover2 from '../assets/typewriter2.JPG'
import bwCover3 from '../assets/thegame2.JPG'
export default function Projects({ campaignMode, setCampaignMode }) {
    const [projects, setProjects] = useState([])
    const [focus, setFocus] = useState([])
    const [x, setX] = useState(0)
    const xRef = useRef(0)
    const [fullview,setFullView] = useState()
    const [trackPosition, setTrackPosition] = useState(0)
    const trackXRef = useRef(0)

    class Project{
        constructor(title, description, liveLink, github, vidSrc, coverSrc, bwCover, titleColors){
            this.title = title
            this.description = description
            this.liveLink = liveLink
            this.github = github
            this.vidSrc = vidSrc
            this.coverSrc = coverSrc
            this.bwCover = bwCover
            this.titleColors = titleColors
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
        const bwCovers = [bwCover1, bwCover2, bwCover3]
        const titleColors = [['#e0afa0', '#f4f3ee', '#bcb8b1', '#8a817c', '#463f3a'], ['#177e89', '#efe6dd', '#f3dfa2', '#bb4430', '#231f20'], ['#01497c', '#01497c', '#014f86', '#2a6f97', '#468faf', '#61a5c2', '#89c2d9', '#a9d6e5']]
        setProjects(
            titles.map((title, i) => {
                let project = new Project(title, descriptions[i], liveLinks[i], githubs[i], videoSrcs[i], coverSrcs[i], bwCovers[i], titleColors[i])
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
    useEffect(() => {
        if (focus.length === 0) return
        setCampaignMode(true)
    }, [focus])
    // Track Scroll Logic
    useEffect(() => {
        if (focus.length !== 0 && campaignMode) return
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
            const maxScrollDelta = track.offsetWidth / 6 
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
    },[campaignMode, fullview])
    useEffect(() => {
        if (focus.length === 0 && !campaignMode) return
        const campaigns = document.querySelector('.campaigns')
        campaigns.scrollLeft += (campaigns.scrollWidth - document.body.clientWidth) / 2
        xRef.current = campaigns.scrollLeft
        campaigns.onscroll = () => {
            setX(campaigns.scrollLeft)
        }
    }, [campaignMode, fullview])
    useEffect(() => {
        if (x - xRef.current === 0) return
        setCampaignMode(false)
        setFocus([])
        setFullView()
    }, [x])
    useEffect(() => {
        if (campaignMode || !fullview) return
        const projectDiv = document.querySelector('.projects')
        const projectTrack = document.getElementById('projectTrack')
        const index = projects.indexOf(fullview)
        console.log('index is', index)
        console.log('dataset scroll', projectTrack.dataset.percentScroll)
        projectTrack.animate({
                transform: `translate(${-1 * projectTrack.dataset.percentScroll}, -50%)`
            }, { duration: 0 , fill: "forwards" })
        projectDiv.scrollLeft =  0.5 * document.body.clientWidth - 0.14 * document.body.clientWidth + index * (document.body.clientWidth - 0.14 * document.body.clientWidth)
        // console.log('scroll width', (projectTrack.scrollWidth - document.body.clientWidth) / 2)
        console.log('scroll left is ', projectDiv.scrollLeft)
        trackXRef.current = projectDiv.scrollLeft
        projectDiv.onscroll = () => {
            console.log('onscroll firing')
            setTrackPosition(projectDiv.scrollLeft)
            projectDiv.scrollLeft = trackXRef.current
        }
    }, [fullview])
    useEffect(() => {
        if (trackPosition === 0) return
        if (Math.abs(trackPosition - trackXRef.current) < 5 ) return
        console.log('>2')
        setFullView()
        const projectTrack = document.querySelector('.projects')
        projectTrack.scrollLeft = 0
        projectTrack.onscroll = () => {
            console.log('2nd onscroll firing')
            projectTrack.scrollLeft = 0
        }
        console.log('project track onscroll', projectTrack.onscroll)
    }, [trackPosition])

    const expand = (project) => {
        const container = document.querySelectorAll('.projectContainer')[projects.indexOf(project)]
        // container.animate({
        //     width:'80vw',
            
        // },{duration: 500, fill:'forwards'})
        setFullView(project)
    }
    // useEffect(() => {
    //     const projectTrack = document.querySelector('.projects')
    //     projectTrack.onscroll = () => {
    //         console.log('scroll width', projectTrack.scrollWidth)
    //         console.log('width is', projectTrack.offsetWidth)
    //         projectTrack.scrollLeft = 0.5 * document.body.clientWidth - 0.12 * document.body.clientWidth + document.body.clientWidth - 0.12 *  document.body.clientWidth +  document.body.clientWidth - 0.12 * document.body.clientWidth
    //         console.log('scroll left', projectTrack.scrollLeft)
    //     }

    // }, [])

    return(
        <>
            {   focus.length !== 0 ?
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
                        <div id='expand'><p>+</p></div>
                        <div id='projectTrack' data-mouse-down-at='0' data-prev-percentage='0' data-prev-scroll='0' data-percent-scroll='0'>
                            { projects.map(project => {
                                return (
                                    <div className={`window ${fullview === project ? 'rgbCover' : fullview ? 'fadedCover' :'bwCover'}`}>
                                        <div 
                                        className={`projectContainer ${fullview === project ? 'rgbCover' : fullview ? 'fadedCover' :'bwCover'}`} 
                                        >
                                            <div className={`projectTitle ${fullview === project ? '' : 'hide'}`}>
                                                {
                                                    [...project.title].map(letter => {
                                                        return(
                                                            <h3 style = {{color:project.titleColors[Math.floor(Math.random() * project.titleColors.length)]}} >{letter}</h3>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='img-box'>
                                                    <img 
                                                    src={project.coverSrc} 
                                                    className={`image ${fullview === project ? '' : 'hide'}`} 
                                                    draggable='false'
                                                    onClick={() => {
                                                    handleFocus(project)
                                                    }}
                                                    ></img>
                                                    <div 
                                                    className={`exploreTag ${fullview === project ? '' : 'hide'}`}
                                                    onClick={() => {
                                                    handleFocus(project)
                                                    }}
                                                    >
                                                        <p>Explore</p>
                                                        <p>+</p>
                                                    </div>
                                                    <img 
                                                    src={project.bwCover} 
                                                    className={`image ${fullview !== project ? '' : 'hide'}`} 
                                                    draggable='false'
                                                    onClick={() => expand(project)}
                                                    ></img>
                                            </div>
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