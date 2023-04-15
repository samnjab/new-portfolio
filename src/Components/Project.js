import { useState, useEffect } from 'react'
export default function Project({ project }) {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://player.vimeo.com/api/player.js"
        script.async = true
        document.body.appendChild(script)
    }, [])
    console.log('project vid scr', project.vidSrc)
    return(
        <div className='campaign-container'>
            <div className='container'>
                <video autoplay='true' playsinline='' loop='true' preload="auto" title={project.title} className="videoFullBleed">
                    <source src={project.vidSrc} type="video/mp4"/>
                </video>
                
            </div>
            <h2 className='title content'>{project.title}</h2>
            <p className='description content'>{project.description}</p>
            <button className='content'>
                <a href={project.liveLink} target='_blank'>Website</a>
            </button>
            <button className='content'>
                <a href={project.github} target='_blank'>Github</a>
            </button>
        </div>
    )

}