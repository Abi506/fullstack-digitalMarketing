import { Component } from 'react'
import Header from '../header'
import { ThreeCircles } from 'react-loader-spinner';
import Url from "../../config";
import {Link} from 'react-router-dom';
import './index.css'



const status = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    in_progress: "IN_PROGRESS",
  };

class Services extends Component{
    state={
        data:[],
        apiStatus:status.initial
    }

    componentDidMount(){
        this.getData()
    }

    retryEvent=()=>{
        this.getData();
    }

    getData = async () => {
        const { search_text } = this.state;
        this.setState({ apiStatus: status.in_progress });
        const url = `${Url}/services`;
        console.log(url, "url");
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          console.log(data, "data");
          const formattedData = data.map((each) => ({
            id:each.id,
            icon:each.icon,
            serviceType:each.serviceType,
            serviceOuterDescription:each.serviceOuterDescription,
            serviceLandingImage:each.serviceLandingImage,
            serviceLandingHeading:each.serviceLandingHeading,
            serviceLandingPara:each.serviceLandingPara,
            serviceCardHeading:each.serviceCardHeading,
            serviceCardPara:each.serviceCardPara,
            serviceInnerHeading:each.serviceInnerHeading,
            serviceInnerPara:each.serviceInnerPara,

          }));
          console.log(formattedData,'formattedData')
          this.setState({ apiStatus: status.success, data: formattedData });
        } else {
          this.setState({ apiStatus: status.failure });
        }
      };

      renderLoader=()=>{
        <div className="loader-container">
            <ThreeCircles type='TailSpin' color="#0284C7" height={50} width={50}/>

        </div>
      }

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

      renderSuccess=()=>{
        const {data}=this.state 

        return(
                <div className='services-container'>
                  <div className='services-page-landing-container'>
                            <h1 className='services-page-heading-landing'>SERVICES</h1>
                            <p>DIGITAL MARKETING AGENCY</p>
                        </div>
                        <div className='services-container'>
                            <h1 className='services-card-heading'>DIGITAL MARKETING SERVICES</h1>
                            <p className='services-card-para'>We invest time and energy in every client to ensure we understand their business and industry. This will help us create a custom digital marketing strategy that delivers a return on investment.</p>
                            <ul className='services-list'>
                                {
                                    data.map(each=>(
                                        <Link to={`/services/${each.id}`} className='nav-link'>
                                        <li key={each.id} className='each-services-service-page-list'>
                                            
                                          <h1 className='services-page-heading'>{each.serviceType}</h1>
                                          <p className='services-page-para'>{each.serviceOuterDescription}</p>
                                        </li>
                                        </Link>
                                    ))
                                }

                            </ul>

                        </div>
                    </div>

        )
      }

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
        console.log(data,'data....')
        return(
            <>
            <Header/>
            <div>{this.renderFinal()}</div>
            </>
        )
      }
    }
    export default Services