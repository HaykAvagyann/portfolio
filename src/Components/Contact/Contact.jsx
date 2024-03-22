import './contact.css'

const Contact = () => {
    return (<div className="Contact" id='contact'>
        <h1 className="ContactTitle">Let`s Work Together</h1>
        <p className="ContactText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil, harum placeat totam nam praesentium, natus aperiam tempore nemo incidunt, numquam quibusdam</p>

        <div className='icons'>
            <div className='icon'>
                <a href='https://www.facebook.com/'>
                    <h2>facebook</h2>
                    <i className='bx bxl-facebook-circle'></i></a>
            </div>
            <div className='icon'>
                <a href='https://www.instagram.com/'>
                    <h2>instagram</h2>
                    <i className='bx bxl-instagram'></i>
                </a>
            </div>
            <div className='icon'>
                <a href='https://www.linkedin.com/in/hayk-avagyan-5b5a5429a/'>
                    <h2>linkedin</h2>
                    <i className='bx bxl-linkedin' ></i>
                </a>
            </div>
        </div>
    </div>);
}

export default Contact;