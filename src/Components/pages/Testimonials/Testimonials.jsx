import React from 'react'
import { Image } from 'react-bootstrap'
import "./Testimonials.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'; // fa-excavator is not in the free set


const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div>
                <h4 className='testimonial-header'>Our Clients say</h4>
                <p></p>
            </div>
            <div className='testimonial-section'>
                <div className='testimonial-section-2'>
                    <div>
                        <Image  src="./images/image1.jpg"></Image>
                    </div>
                    <div className='testimonial-section-4'>
                        <p className='testimonial-paragraph'><i>"It's just brilliant. I will recommend Cobuild to everyone I know! I'm really glad to these guys got Cobuild out there"</i></p>
                        <h4 className='name'>Gene Stevens</h4>
                    </div>
                </div>
                <div className='testimonial-section-3'>
                    <div>
                        <Image src="./images/image2.jpg"></Image>
                    </div>
                    <div className='testimonial-section-5'>
                        <p className='testimonial-paragraph'><i>“We are so excited to launch our new company, By using Cobuild it has a great features, I think you are all about to make me happy.”</i></p>
                        <p className='name'>Noah Sunday</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials