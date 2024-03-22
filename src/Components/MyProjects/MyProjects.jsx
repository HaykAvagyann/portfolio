import './myProjects.css'

const MyProjects = () => {
    return (<div className="MyProjects" id='projects'>
        <h1 className="MyProjectsTitle">My Projects</h1>
        <p className="MyProjectsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil, harum placeat totam nam praesentium, natus aperiam tempore nemo incidunt, numquam quibusdam</p>

        <div className='Projects'>
            <div className='Project'>
                <a href='https://github.com/RomanAmzaryan/toursPage.git/'><img src='https://www.aryavrittravels.com/wp-content/uploads/2024/01/Travel-Agency-in-Ayodhya.jpg' alt='' /></a>
            </div>
            <div className='Project'>
                <a href='https://github.com/HaykAvagyann/messengerclone'><img src='https://cdn.osxdaily.com/wp-content/uploads/2019/12/dark-mode-facebook-messenger.jpg' alt='' /></a>
            </div>
        </div>
    </div>);
}

export default MyProjects;