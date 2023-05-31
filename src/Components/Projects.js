import { useState, useEffect, useRef } from 'react'
import Campaign from './Project'
import cover1 from '../assets/euphonia.JPG'
import cover2 from '../assets/typewriter.JPG'
import cover3 from '../assets/thegame.jpeg'
import cover4 from '../assets/portfolio.JPG'
import vid1 from '../assets/e3.mp4'
import vid2 from '../assets/Acrolix.mp4'
import vid3 from '../assets/Game.mp4'
import vid4 from '../assets/portfolio.mp4'
import bwCover1 from '../assets/euphonia2.JPG'
import bwCover2 from '../assets/typewriter2.JPG'
import bwCover3 from '../assets/thegame2.JPG'
import bwCover4 from '../assets/portfolio2.JPG'
export default function Projects({ campaignMode, setCampaignMode, theme, setTheme, themeMem }) {
    const [projects, setProjects] = useState([])
    const [focus, setFocus] = useState([])
    const [x, setX] = useState(0)
    const xRef = useRef(0)
    const [fullview,setFullView] = useState()
    const [trackPosition, setTrackPosition] = useState(0)
    const trackXRef = useRef(0)
    const [y, setY]= useState(0)
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
            this.id = idGenerator(10)
        }
    }
    useEffect(() => {
        const titles = ['Euphonia', 'Acrolix', 'The Game', "Sam's Portfolio"]
        const descriptions = [
            {oneLiner:'Find your next favourite tune.' ,pitch:"Do you like the sweet sound of synthesizers? Does electronic music make your heart sing?/Are you in love? Are you heartbroken?/Checkout Euphonia."}
            ,{oneLiner:'Chaotic Word Play.', pitch: "Looking for a catchy name for your business? a memorable slogan for your brand?/Acrolix is the perfect tool./Play with creative backronyms with a fun sleek interface in just a few taps."}
           ,{oneLiner:'Come watch The Game with us.', pitch:'Follow the stats of your favourite FIFA team on The Game.'}, {oneLiner:'Buttery Smooth Motion Development.', pitch:'Curious how this porfolio was built?/Check out the code.'}
        ]
        const liveLinks =[
            'https://euphonia3.vercel.app/',
            'https://acrolix.netlify.app/',
            'https://thegame101.netlify.app',
            'https://samjaberi.dev/'
        ]
        const githubs = [
            'https://github.com/samnjab/euphonia3',
            'https://github.com/samnjab/Acrolix',
            'https://github.com/samnjab/theGame',
            'https://github.com/samnjab/new-portfolio'
        ]
        const videoSrcs = [vid1, vid2, vid3, vid4]
        const coverSrcs = [cover1, cover2, cover3, cover4]
        const bwCovers = [bwCover1, bwCover2, bwCover3, bwCover4]
        const titleColors = [['#e0afa0', '#f4f3ee', '#bcb8b1', '#8a817c', '#463f3a'], ['#177e89', '#efe6dd', '#f3dfa2', '#bb4430', '#231f20'], ['#fffcf2', '#ccc5b9', '#403d39', '#252422', '#eb5e28'], ['#6b705c', '#ddbea9', '#ffe8d6', '#b7b7a4', '#a5a58d', '#6b705c']]
        setProjects(
            titles.map((title, i) => {
                let project = new Project(title, descriptions[i], liveLinks[i], githubs[i], videoSrcs[i], coverSrcs[i], bwCovers[i], titleColors[i])
                return project
            })
        )
    },[])
    useEffect(() => {
        if (!campaignMode) return
        const campaigns = document.querySelector('.campaigns')
        campaigns.addEventListener('scroll', () => {
            setY(campaigns.scrollTop)
        }, true)
    }, [campaignMode])
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
            const maxScrollDelta = window.innerWidth 
            const percentage = (scrollDelta / maxScrollDelta) * 100
            const nextPercentageUnconstrained = parseFloat(track.dataset.percentScroll) + percentage
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
            track.dataset.percentScroll = nextPercentage
            track.dataset.prevScroll = e.target.scrollLeft 
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
        if (x - xRef.current < 2 && x - xRef.current > -2) return
        setCampaignMode(false)
        setFocus([])
        setFullView()
        setTheme(themeMem.current)
    }, [x])
    useEffect(() => {
        if (campaignMode) return
        if (!fullview){
            setTheme(themeMem.current)
            return
        }
        console.log('theme is', theme)
        console.log('themeMem is', themeMem.current)
        themeMem.current === 'light' ? setTheme('dark') : setTheme('light')
        const projectDiv = document.querySelector('.projects')
        const projectTrack = document.getElementById('projectTrack')
        const index = projects.indexOf(fullview)
        projectTrack.animate({
                transform: `translate(${-1 * projectTrack.dataset.prevScroll}, -50%)`
            }, { duration: 1200 , fill: "forwards" })
        projectDiv.scrollLeft =  0.5 * document.body.clientWidth - 0.16 * document.body.clientWidth + index * (document.body.clientWidth - 0.16 * document.body.clientWidth)
        trackXRef.current = projectDiv.scrollLeft
        projectDiv.onscroll = () => {
            setTrackPosition(projectDiv.scrollLeft)
            projectDiv.scrollLeft = trackXRef.current
            projectTrack.animate({
                transform: `translate(0%, -50%)`
            }, { duration: 1200 , fill: "forwards" })
        }
        const inFullView = document.getElementById(fullview.id)
        inFullView.querySelectorAll('h3').forEach(letter => {
            letter.classList.add('textAnimator')
        })
    }, [fullview])
    useEffect(() => {
        if (trackPosition === 0) return
        if (Math.abs(trackPosition - trackXRef.current) < 2 ) return
        console.log('>5')
        setFullView()
        const projectTrack = document.querySelector('.projects')
        projectTrack.scrollLeft = 0
        // projectTrack.onscroll = () => {
        //     console.log('2nd onscroll firing')
        //     projectTrack.scrollLeft = 0
        // }
    }, [trackPosition])

    const expand = (project) => {
        const container = document.querySelectorAll('.projectContainer')[projects.indexOf(project)]
        const titleDiv = container.querySelector('.projectTitle')
        titleDiv.animate({
            transform: `translate(${0}%, -50%)`
        }, { duration: 1200, fill: "forwards" })
       
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
    const idGenerator = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    }

    return(
        <>
            {   focus.length !== 0 ?
                projects.length !== 0 ?
                <div className='campaigns'>
                    {     
                    focus.map(project => {
                        return <Campaign project={project} y={y}/>
                    })
                    }
                </div>
                :
                <></>
                :
                <>
                    <div className='projects'>
                        <div id='expand'><p>+</p></div>
                        <div id='projectTrack' className={`${fullview ? 'expanded' : ''}`} data-mouse-down-at='0' data-prev-percentage='0' data-prev-scroll='0' data-percent-scroll='0'>
                            { projects.map(project => {
                                return (
                                    <div className={`window ${fullview === project ? 'rgbCover' : fullview ? 'fadedCover' :'bwCover'}`} id={project.id} key={project.id}>
                                        <div 
                                        className={`projectContainer ${fullview === project ? 'rgbCover' : fullview ? 'fadedCover' :'bwCover'}`} 
                                        >
                                            <div className={`projectTitle ${fullview === project ? '' : 'hide'}`}>
                                                {
                                                    [...project.title].map(letter => {
                                                        return(
                                                            <h3 
                                                            style = {{color:project.titleColors[Math.floor(Math.random() * project.titleColors.length)]}} 
                                                            // className={`${fullview === project ? 'textAnimator' : ''}`}
                                                            >{letter}</h3>
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