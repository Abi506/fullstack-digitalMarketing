import { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header'
import { ThreeCircles } from 'react-loader-spinner';
import Url from "../../config";
import './index.css'


const status = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    in_progress: "IN_PROGRESS",
  };
  
class ServiceItemDetails extends Component{
    state = { data: [], apiStatus: status.initial };

  componentDidMount() {
    this.getData();
  }

  retryEvent = () => {
    this.getData();
  };

  getData = async () => {
    this.setState({ apiStatus: status.in_progress });
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id,'id')
    
    const options = {
      method: "GET",
    };

    const apiUrl = `${Url}/services/${id}`;
    console.log(apiUrl,'api url')
    const response = await fetch(apiUrl, options);
    console.log(response,'response')
    if (response.ok) {
      const data = await response.json();
      const formattedData = {
        id:data.id,
            icon:data.icon,
            serviceType:data.serviceType,
            serviceOuterDescription:data.serviceOuterDescription,
            serviceLandingImage:data.serviceLandingImage,
            serviceLandingHeading:data.serviceLandingHeading,
            serviceLandingPara:data.serviceLandingPara,
            serviceCardHeading:data.serviceCardHeading,
            serviceCardPara:data.serviceCardPara,
            serviceInnerHeading:data.serviceInnerHeading,
            serviceInnerPara:data.serviceInnerPara,

      };
      console.log(formattedData, "formattedData");
      this.setState({ data: formattedData, apiStatus: status.success });
    } else {
      this.setState({ apiStatus: status.failure });
    }
  };

  renderLoader = () => (
    <div className="loader-container">
      <ThreeCircles type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  );

    renderSuccess = () => {
    const { data } = this.state;
    

    return (
      <div className='services-item-details-container'>
        <div className='services-details-landing-container'>
            <h1 className='services-details-landing-heading'>{data.serviceLandingHeading}</h1>
            <p className='services-details-landing-para'>{data.serviceLandingPara}</p>
            </div>
            <div className='services-details-card-container'>
                <h1 className='services-details-card-heading'>{data.serviceCardHeading}</h1>
                <p className='services-details-card-para'>{data.serviceCardPara}</p>
            </div>
            <div className='services-items-benefit-container'>
                <h1 className='services-benefit-heading'>{data.serviceInnerHeading}</h1>
                <p className='services-benefit-para'>{data.serviceInnerPara}</p>
            </div>
            <div className='request-container-services'>
                <h1 className='request-heading-services'>Request a free consultation!</h1>
                <div className='request-services-button-container'>
                    <button type='button' className='request-services-button'> <a href="/contact/" className='common-styles'>GET IN TOUCH</a></button>

                </div>



            </div>

        


      </div>
    );

  };

  renderFail=()=>(
    <div className="failed-container">
         <div>
    <img
      src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1699932471/Group_7522_b4fynz.png"
      alt="failure view"
      className="failed-image"
    />
  </div>
  <p className="failed-para">Something went wrong. Please try again</p>
  <div>
    <button
      type="button"
      className="failed-button"
      onClick={this.retryEvent}
    >
      Try Again
    </button>
  </div>
    </div>

  );

  renderFinal = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case status.in_progress:
        return this.renderLoader();
      case status.success:
        return this.renderSuccess();
      default:
        return this.renderFail();
    }
  };

  render(){
  
  
    const{data}=this.state
    return(
        <>
        <Header/>
        <div className="Blog-item-details-container">
            {this.renderFinal()}
        </div>
        </>
    )
  }
}
  

export default ServiceItemDetails