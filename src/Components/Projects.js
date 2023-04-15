import { useState, useEffect } from 'react'
import ProjectC from './Project'
import cover1 from '../assets/euphonia.jpg'
import cover2 from '../assets/typewriter.jpeg'
import cover3 from '../assets/thegame.jpeg'
import vid1 from '../assets/e3.mp4'
import vid2 from '../assets/Acrolix.mp4'
import vid3 from '../assets/Game.mp4'
export default function Projects() {
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
    
    return(
        <div className='projects'>
            {   focus.length !== 0 ?
                projects.length !== 0 ?
                focus.map(project => {
                    return <ProjectC project={project} />
                })
                :
                <></>
                :
                projects.map(project => {
                    return (
                        <div className='img-box' onClick={() => handleFocus(project)}>
                            <img src={project.coverSrc}></img>
                        </div>
                    )
                })
            }
        </div>
    )

}