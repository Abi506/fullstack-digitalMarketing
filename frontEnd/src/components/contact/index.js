import { Component } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Url from "../../config";
import Header from "../header";


import "./index.css";

const status = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    in_progress: "IN_PROGRESS",
  };

  class Contact extends Component{
    state={
        name:"",
        emailAddress:'',
        message:'',
        allDetailsFilled:false,
        apiStatus:status.initial
    }

    nameEvent=(event)=>{
        this.setState({name:event.target.value});
    }

    emailAddressEvent=(event)=>{
        this.setState({emailAddress:event.target.value})
    }

    messageEvent=(event)=>{
        this.setState({message:event.target.value})
    }

    submitEvent=async(event)=>{
        event.preventDefault()
        const{name,emailAddress,message}=this.state 
        const userDetails={name,emailAddress,message}
        console.log(name,emailAddress,message,'here')
        if (name==="" || emailAddress===""||message===""){
            this.setState({allDetailsFilled:false})
        }
        else{
            const apiUrl = `${Url}/contact/`;
            console.log(apiUrl,'apiurl')
            const method = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userDetails),
            };
            const response = await fetch(apiUrl, method);
            console.log(response, "upload response");
      this.setState({allDetailsFilled:true,name:"",message:"",emailAddress:""})
      console.log("All DEtails filled")
        }

    }

    render(){

        const{name,emailAddress,message}=this.state
        
        return(
            <>
            <Header/>
            <div className="contact-container">
                <div className="landing-contact-container">
                    <div className="landing-contact-details-container">
                        <h1 className="landing-contact-heading">CONTACT US</h1>
                        <p className="landing-contact-para">Wether you are looking for help with stratedy,search engine optimization,content marketing or something else,we would love to help.Send Us a message and we will get back to you as soon as possible.</p>
                        <ul className="address-list">
                            <li className="address-detials">
                            <FaLocationDot className="common-icon"/>
                            <div>
                               <h1 className="address-heading">Address</h1>
                               
                                <p className="common-text">1/324A Athipatti</p>
                                <p className="common-text">Aruppukottai,Virudhunagar</p>
                                <p className="common-text">Tamil Nadu,India</p>
                                </div>
                            </li>
                            <li className="address-detials">
                                <MdEmail className="common-icon"/>
                                <div>
                                    <h1 className="address-heading">Email</h1>
                                    <p className="common-text"><a href="#" className="mail">info@digitalpulsemarketing.com</a></p>     
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="contact-landing-image-container">
                        <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1706959718/search_engine_advertising-1_kupncz.jpg" className="contact-landing-image"/>
                    </div>
                </div>

                <form className="form-submission" onSubmit={this.submitEvent}> 
                <h1 className="form-heading">GET IN TOUCH</h1>
                <hr className="horizontal-line"/>
                <div className="name-and-mail-container">
                <div className="common-input-container">
                    <input type="text" value={name} className="common-input-box" placeholder="Name" onChange={this.nameEvent}/>
                </div>
                <div className="common-input-container">
                    <input type="text" value={emailAddress} className="common-input-box" placeholder="Email Address" onChange={this.emailAddressEvent}/>
                </div>
                </div>
                <div className="common-input-container">
                <textarea 
                rows={7}
                    className="common-input-box-message" 
                    placeholder="Message" 
                    value={message}
                    onChange={this.messageEvent}/>
                                               
                </div>
                <div className="form-button-container">
                    <button type='submit' className="form-button">SUBMIT MESSAGE</button>

                </div>

                </form>

            </div>
            </>
        )
    }

  }
  export default Contact