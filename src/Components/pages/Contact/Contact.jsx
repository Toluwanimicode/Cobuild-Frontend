import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div  id='contact' >
      <div className='contact-section'>
        <div className='sections'>
          <i className="fas fa-home" style={{ fontSize: '50px', color: '#F5AF00',  padding: "10px" }}></i>
          <h4>Address</h4>
          <p>220 Petersham town, Wardell</p>
          <p>street, Australia PA 6550.</p>
        </div>
        <div className='sections'>
          <i className="fas fa-phone-alt" style={{ fontSize: '50px', color: '#F5AF00', padding: "10px" }}></i>
          <h4>Phone</h4>
          <p>Phone: (04) 491 570 110</p>
          <p>Fax: +04 642 021 332</p>
        </div>
        <div className='sections'>
          <i className="fas fa-envelope" style={{ fontSize: '50px', color: '#F5AF00', padding: "10px" }}></i>
          <h4>Email</h4>
          <p>support@zytheme.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;


