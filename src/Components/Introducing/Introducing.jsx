import './introducing.css'

const Introducing = () => {
    return (<div className='Introducing' id='home'>
        <div className='introAbout'>
            <h4 className='Hi'>Hi I am</h4>
            <h4 className='FullName'>Hayk Avagyan</h4>
            <div className='JobBlock'>
                <h1 className='Job'>Front End <span className='Developer'>Developer</span></h1>
            </div>
            <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil, harum placeat totam nam praesentium, natus aperiam tempore nemo incidunt, numquam quibusdam molestiae debitis voluptas ipsam ullam! Quis, exercitationem temporibus.
            </p>
            <a href='#contact'><button>Hire Me</button></a>
        </div>
        <div className='introImage'>
            <div className='ImageDiv'></div>
            <div className='icons'>
                <a href='https://www.facebook.com/'><i className='bx bxl-facebook-circle'></i></a>
                <a href='https://www.instagram.com/'><i className='bx bxl-instagram'></i></a>
                <a href='https://www.linkedin.com/in/hayk-avagyan-5b5a5429a/'><i className='bx bxl-linkedin' ></i></a>
            </div>
        </div>
    </div>);
}

export default Introducing;