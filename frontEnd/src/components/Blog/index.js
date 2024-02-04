import { Component } from "react";

import { ThreeCircles } from "react-loader-spinner";
import Header from "../header";
import Url from "../../config";
import BlogItems from "../BlogItems";

import "./index.css";

const status = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    in_progress: "IN_PROGRESS",
  };

class Blog extends Component{
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
        const url = `${Url}/blogs`;
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
            imageUrl:each.imageUrl,
            innerDescription:each.innerDescription,
            innerTitle:each.innerTitle,
            outerAuthorDate:each.outerAuthorDate,
            outerDescription:each.outerDescription,
            outerTitle:each.outerTitle

          }));
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
        const{data}=this.state
        return(
        <div className="blogs-container">
        <div className="blog-landing-image-container">
            <h1 className="blog-landing-heading">BLOG</h1>
            <p className="blog-landing-para">Non-stop Knowlegde&inspiration</p>
            </div>
            <div className="blogs-items-container">
                <BlogItems details={data}/>

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
        return(
            <>
            <Header/>
            <div>{this.renderFinal()}</div>
            </>
        )
      }


}
export default Blog