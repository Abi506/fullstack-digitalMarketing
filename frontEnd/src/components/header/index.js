import {Link,withRouter} from 'react-router-dom';
import {Component} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import "./index.css"

class Header extends Component{
    state={displayMenu:false}

    changeIcon = () => {
        this.setState((prevState) => ({ displayMenu: !prevState.displayMenu }));
      };



    render(){
        const {displayMenu}=this.state
        return(
            <>
            <nav className="nav-container-small">
          <div className="intermediate-container">
            <Link to="/" className="nav-link">
              <div className="website-logo-container">
               <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1706884597/Screenshot_2024-02-02_164834-removebg-preview_ngzffs.png" className='logo'/>
              </div>
            </Link>
            <div className="hamburger-icon-container">
              <button type="button" className="hamburgerButton">
                <GiHamburgerMenu
                  className="hamburger-icon"
                  onClick={this.changeIcon}
                />
              </button>
            </div>
          </div>
          {displayMenu === true && (
            <ul className="sections-list">
              <Link to="/" className="nav-link">
                <li className="home-small">Home </li>
              </Link>
              <Link to="/blogs/" className="nav-link">
                <li className="blogs-small">Blogs </li>
              </Link>
              <Link to="/services/" className="nav-link">
                <li className="services-small">Services </li>
              </Link>
              <Link to="/about-us/" className="nav-link">
                <li className="about-small">About Us</li>
              </Link>
              <Link to="/contact/" className="nav-link">
               <li className='contact-small'>Contact</li>
              </Link>
            </ul>
          )}
        </nav>
        <nav className="nav-container-large">
          <Link to="/" className="nav-link">
            <div className="website-logo-container-header">
              <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1706884597/Screenshot_2024-02-02_164834-removebg-preview_ngzffs.png" class="logo"/>
            </div>
          </Link>
          <ul className="sections-list">
            <Link to="/" className="nav-link">
              <li className="home-large">Home </li>
            </Link>
            <Link to="/blogs/" className="nav-link">
              <li className="blogs-large">Blogs</li>
            </Link>
            <Link to="/services/" className="nav-link">
              <li className="services-large">Services</li>
            </Link>
            <Link to="/about-us/" className="nav-link">
              <li className="about-large">About Us</li>
            </Link>
            <Link to="/contact/" className="nav-link">
              <li className="contact-large">Contact</li>
            </Link>
          </ul>
        </nav>
            </>
        )
    }
}
export default withRouter(Header);