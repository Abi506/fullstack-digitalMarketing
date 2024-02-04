import { Component } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Header from "../header";
import Url from "../../config";
import "./index.css";

const status = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    in_progress: "IN_PROGRESS",
  };
  
class BlogItemDetails extends Component{
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

    const apiUrl = `${Url}/blogs/${id}`;
    console.log(apiUrl,'api url')
    const response = await fetch(apiUrl, options);
    console.log(response,'response')
    if (response.ok) {
      const data = await response.json();
      const formattedData = {
        id:data.id,
        imageUrl:data.imageUrl,
        innerDescription:data.innerDescription,
        innerTitle:data.innerTitle,
        outerAuthorDate:data.outerAuthorDate,
        outerDescription:data.outerDescription,
        outerTitle:data.outerTitle
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
    const {id,imageUrl,innerDescription,innerTitle,outerAuthorDate,outerDescription,outerTitle } = data;

    return (
      <div className="blog-details-container">
        <h1 className="blog-details-heading">{data.outerTitle}</h1>
        <p className="blog-details-author-date">by Digital Pulse Marketing | {data.outerAuthorDate}</p>
        <div className="blog-details-image-container">
            <img src={data.imageUrl} className="blog-details-image"/>
        </div>
        <p className="blog-details-para">
            {data.outerDescription}
        </p>
        <div className="blog-details-card-container">
            <h1 className="blog-card-heading">{data.innerTitle}</h1>
            <p className="blog-card-description">{data.innerDescription}</p>
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
  

export default BlogItemDetails