import { useState, useEffect, useRef } from 'react'
export default function Project({ project, y }) {
    const [fadeIn, setFadeIn] = useState(false)
    useEffect(() => {
        // const script = document.createElement('script')
        // script.src = "https://player.vimeo.com/api/player.js"
        // script.async = true
        // document.body.appendChild(script)
        // ScrollX to exit campaign view
    }, [])
    useEffect(() => {
        const projectContainer = document.getElementById(`${project.id}-campaignContainer`)
        if (projectContainer.getBoundingClientRect().top < window.innerHeight/3) setFadeIn(true)
    }, [y])
    useEffect(() => {
        if (!fadeIn) return
        console.log('animating', project.title)
        document.getElementById(`${project.id}-campaignContainer`).querySelectorAll('div.content span').forEach(span => {
            span.animate(
            {animation:'animateOpenUpFade'},
            { duration: 1200, fill: "forwards" }
        )
        })
    }, [fadeIn])
    return(
        <div className='campaign-container' id={`${project.id}-campaignContainer`}>
            <div className='container'>
                <video autoPlay={true} playsInline={false} loop={true} preload="auto" title={project.title} className="videoFullBleed">
                    <source src={project.vidSrc} type="video/mp4"/>
                </video>
                <a className='content' href={project.liveLink} target='_blank'>{project.title}</a>
                <a className='content' href={project.github} target='_blank'>Github</a>
                <div className='content'>
                    <p>
                        {
                            project.description.oneLiner.split(/(\s+)/).map(word => {
                                return (
                                    <span>{word}</span>
                                )
                            })
                        }
                    </p>
                    {/* <p>{project.description.oneLiner}</p> */}
                    <p>{project.description.pitch}</p>
                </div>
            </div>

        </div>
    )

}