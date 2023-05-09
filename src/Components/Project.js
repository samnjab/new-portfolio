import { useState, useEffect, useRef } from 'react'
export default function Project({ project }) {
    useEffect(() => {
        // const script = document.createElement('script')
        // script.src = "https://player.vimeo.com/api/player.js"
        // script.async = true
        // document.body.appendChild(script)
        // ScrollX to exit campaign view
        
    }, [])
    return(
        <div className='campaign-container'>
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