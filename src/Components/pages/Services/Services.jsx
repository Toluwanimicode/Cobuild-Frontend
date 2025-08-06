import React from 'react'
import "./Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'; // fa-excavator is not in the free set


const Services = () => {
    return (
        <div id='services'>
            <div>
                <h1 className='header'>Our Services</h1>
                <p className='sub-text'>At Cobuild, we offer a wide range of construction services designed to bring your vision to life. We combine quality craftsmanship with expert project management to deliver results you can trust.</p>
            </div>
            <div className='activities'>
                <div>
                    <img className='section-image' src="./images/excavator.png" width="100px" height="100px"></img>
                    <h4 className='sub-head'>Fast Operations</h4>
                    <p className='content'>Our team is committed to delivering high-quality results efficiently, ensuring that every project stays on schedule without compromising on standards.</p>
                </div>
                <div>
                    <img className='section-image'  src="./images/crane.png" width="100px" height="100px"></img>
                    <h4 className='sub-head'>Renovation</h4>
                    <p className='content'>Give your space a fresh, modern look with our renovation services. We transform your existing structure into something truly remarkable.</p>
                </div>
                <div className='section-2'>
                    <img className='section-image'  src="./images/helmet.png" width="100px" height="100px"></img>
                    <h4 className='sub-head'>Consulation</h4>
                    <p className='content'>Our expert consultants provide guidance every step of the way—from planning and budgeting to material selection and project feasibility.</p>
                </div>
                <div>
                    <img className='section-image'  src="./images/architecture.png" width="100px" height="100px"></img>
                    <h4 className='sub-head'>Architecture</h4>
                    <p className='content'>Our skilled architects combine creativity and functionality to design spaces that are beautiful, practical, and tailored to your needs.</p>
                </div>
            </div>
        </div>
    )
}

export default Services