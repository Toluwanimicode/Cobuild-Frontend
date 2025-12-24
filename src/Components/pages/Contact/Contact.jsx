import React from "react";
import "./Contact.css";
import homeIcon from "./images/house.svg"; 

const Contact = () => {
  return (
    <>
      <div>
        <div>
           <img src="./images/house.svg" alt="Home" width="30" height="30" />
          <img src="./public/images/house.svg" alt="Girl in a jacket" width="500" height="600"></img>
          <h4>Address</h4>
          <p>220 Petersham town, Wardell street , Australia PA 6550</p>
        </div>
        <div>
          <i className="fa-solid fa-mobile-screen" style={{ fontSize: "30px", color: "red" }}></i>


          <h4>Phone</h4>
          <p>
            Phone: (04) 491 570 110 <br />
            Fax: + 04 642 021 332
          </p>
        </div>
        <div>
          <h4>Email</h4>
          <p>
            support@zytheme.com <br />
            Twitter : @zytheme
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
