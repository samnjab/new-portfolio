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
        const spanArray = document.getElementById(`${project.id}-campaignContainer`).querySelectorAll('div.content span.text')
        const paragraphArray = document.getElementById(`${project.id}-campaignContainer`).querySelectorAll('div.content .sentence span')
        console.log(paragraphArray)
        const animateText = async(spanArray) => {
            for (let i=0; i < spanArray.length; i++){
                await animate(spanArray[i], 100)
            }
            for (let i=0; i < paragraphArray.length; i++){
                await animate(paragraphArray[i], 100)
            }
        }
        const animate = (span, delay) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    span.classList.add('textAnimator')
                    resolve()
                }, delay)
            }) 
        }
        animateText(spanArray)
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
                                    <>
                                        <span className='text'>{word}</span>
                                    </>
                                )
                            })
                        }
                    </p>
                    <div className='pitch'>
                        {
                            project.description.pitch.split(/\/+/).map(sentence => {
                                return (
                                <p className='sentence'>
                                    <span>{sentence}</span>
                                </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )

}