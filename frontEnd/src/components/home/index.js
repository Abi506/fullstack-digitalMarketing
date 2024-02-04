import Header from '../header'
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiCursorLight } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { LiaEditSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa6";

import './index.css'

const services=[
    {id:1,
        icon:<IoIosSearch className='services-icons'/>,
        title:'Search Engine Optimization',
        description:'We help you improve your Google ranking and increase your organic (non-paid) website traffic. SEO is more than just incorporating keywords and we can help to optimize all elements.'
    }
    ,
    {id:2,
        icon:<PiCursorLight className='service-icons-two'/>,
        title:'Search Engine Advertising',
        description:'Search engine advertising, also known as pay-per-click advertising, helps you reach new customers and guarantees a consistent traffic flow to your website.',
    },
    {id:3,
        icon:<GiSettingsKnobs className='services-icons'/>,
        title:'Web Development & Design',
        description:'Websites are the essence of your online presence. We will create a functional website that is customized for your business and drives results. All of our websites include SEO, and lead generation tools.',
    },
    {id:4,
        icon:<FaRegThumbsUp className='service-icons-two'/>,
        title:'Social Media Marketing',
        description:'We help you with social media management and advertising to help you grow your business and reach new clients.',
    },
    {id:5,
        icon:<LiaEditSolid className='services-icons'/>,
        title:'Content Marketing',
        description:'Content marketing helps you increase online visibility, traffic and brand awareness. We offer effective SEO-copywriting that resonates with your target audience.',
    },
    {id:6,
        icon:<FaRegLightbulb className='service-icons-three'/>,
        title:'Digital Marketing Strategy',
        description:'Get your own digital marketing strategy built from scratch. Schedule a free consultation to get started.',
    },
]

const Home=()=>(
    <>
<Header/>
<div className='home-container'>
    <div className='landing-section'>
        <h1 className='landing-content-start'>BUSINESS GROWTH STARTS HERE</h1>
        <h2 className='landing-content-end'>DIGITAL MARKETTING </h2>
        <div className='landing-section-button-container'>
            <button type='button' className='landding-section-button'>
            <a href="contact" className='common-styles'>LET'S TALK DIGITAL </a>
            </button>

        </div>
    </div>
    <div className='card-container'>
        <h1 className='card-heading'>
            DIGITAL MARKETING 
        </h1>
        <p className='card-para'>
        Worldwide we help businesses gain more leads and brand awareness by reassessing and improving their online presence. We provide solutions to the
        increase their business by <span className='card-highlighter'>search engine optimization</span>,
        <span className='card-highlighter'>online advertising</span>,
        and <span className='card-highlighter'>content strategy</span> to ensure business growth
        </p>
    </div>
    <div className='services-container'>
        <h1 className='services-heading'>
            DIGITAL MARKETING SERIVES
        </h1>
        <p className='services-para'>
        Our full-service digital marketing agency offers affordable and effective digital marketing plans. We work to deliver improved rankings, increased traffic and, in turn, more business.
        </p>
        <ul className='services-list'>
            {
                services.map(each=>(
                    <li key={each.id} className='each-services-list'>
                        {each.icon}
                        <div className='content-services'>
                            <h1 className='each-service-heading'>{each.title}</h1>
                            <p className='each-service-para'>{each.description}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
        <div className='services-section-button-container'>
            <button type='button' className='services-section-button'>
                <a href="contact" className='common-styles'>LET'S WORK TOGETHER</a>
            </button>

        </div>
    </div>
</div>
</>
)
export default Home;