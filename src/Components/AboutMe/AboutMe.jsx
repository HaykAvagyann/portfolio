import './aboutMe.css'

const AboutMe = () => {
    return (<div className='AboutMe' id='aboutMe'>
        <div className='AboutMeImageDiv'></div>
        <div className='AboutMeSection'>
            <h1>About Me</h1>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil, harum placeat totam nam praesentium, natus aperiam tempore nemo incidunt, numquam quibusdam molestiae debitis voluptas ipsam ullam! Quis, exercitationem temporibus.</p>

            <ul>
                <li>HTML</li>
                <div className='knolwadge'><div className='percent html'></div></div>
                <li>Css</li>
                <div className='knolwadge'><div className='percent css'></div></div>
                <li>Sass</li>
                <div className='knolwadge'><div className='percent sass'></div></div>
                <li>Scss</li>
                <div className='knolwadge'><div className='percent scss'></div></div>
                <li>Bootstrap</li>
                <div className='knolwadge'><div className='percent bootstrap'></div></div>
                <li>JS</li>
                <div className='knolwadge'><div className='percent js'></div></div>
                <li>React</li>
                <div className='knolwadge'><div className='percent react'></div></div>
            </ul>
        </div>
    </div>);
}

export default AboutMe;