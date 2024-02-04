import { Link } from "react-router-dom";

import "./index.css";

const BlogItems=(props)=>{
    const{details}=props;
    return(
        <ul className="list-of-blogs">
            {
               details.map(each=>(
                <Link to={`/blogs/${each.id}`} className="nav-link" key={each.id}>
                    <li className="each-blog">
                        <div className="each-blog-image-container">
                            <img src={each.imageUrl} className="each-blog-image"/>
                        </div>
                        <div className="each-blog-card-container">
                            <h1 className="each-blog-heading">{each.outerTitle}  </h1>
                            <p className="each-blog-authord-date">by Digital Pulse Marketing | {each.outerAuthorDate}</p>
                            <p className="each-blog-description">{each.outerDescription}</p>
                        </div>

                    </li>


                </Link>
               )) 
            }
        </ul>
    )
}
export default BlogItems