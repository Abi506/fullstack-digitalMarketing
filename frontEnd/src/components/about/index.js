import Header from '../header'
import {Link} from 'react-router-dom'
import './index.css'

const About=()=>(
    <>
    <Header/>
    <div className='about-container'>
        <div className='lading-about-container'>
            <div className='landing-heading-and-para'>
                <h1 className='landing-heading'>Who We Are</h1>
                <p className='landing-para'>Your Trusted Digital Marketing Partner</p>
            </div>
            <div className='landing-image-container'>
                <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1706978141/Thrive-team-group-img_lxwak2.webp" className='landing-image'/>
            </div>
        </div>
        <div className='company-policy-container'>
            <p className='policy-para'>
            Digital Pulse Marketing Agency is an award-winning digital marketing company that offers a full spectrum of data-driven web marketing services. We develop growth-oriented online marketing campaigns that make a positive impact on businesses.
            </p>
        </div>
        <div className='about-card-container'>
            <h1 className='about-card-heading'>
            We're Dedicated to Your Success
            </h1>
            <p className='about-card-para'>
            Founded in 2024 By <span className='highlighter-about'>Abi Nandhan</span>, Digital Pulse Marketing is deeply committed to empowering businesses across diverse industries to elevate their marketing strategies and achieve unparalleled success in the digital realm. What began as a solitary endeavor has evolved into a dynamic full-service digital marketing agency, catering to the needs of countless enterprises worldwide.
            <br/>
            <br/>
            At Digital Pulse Marketing, our mission is clear: to deliver exceptional results and cultivate enduring relationships with our clients. With a vast clientele spanning India, Germany, Hong Kong, the United States, and beyond, we take pride in being the trusted partner for businesses seeking to thrive in the digital landscape. Whether you're a burgeoning startup or a well-established franchise, we possess the expertise and passion to propel your brand forward.
             <br/>
             As we expand our horizons, we remain steadfast in our commitment to innovation and excellence. By continually refining our methodologies and embracing cutting-edge tools, we ensure that our clients receive nothing short of stellar digital marketing solutions.
             <br/>
             Join us at Digital Pulse Marketing, where every pulse resonates with the promise of unparalleled success.
            </p>

        </div>
        <div className='about-our-services-container'>
            <h1 className='about-services-heading'>
            We Are Your Premier Digital Marketing Partners
            </h1>
            <p className='about-services-para'>
            At Digital Pulse Marketing, we take pride in our team of seasoned digital marketing experts who excel in every aspect of web marketing: strategic planning, creative innovation, and technical mastery. As pioneers in the digital marketing realm, Digital Pulse Marketing boasts a dedicated team of over 10 Highly skilled Professionals. Our collaborative approach ensures seamless campaign development and execution for our esteemed clients.
            <br/>
            <br/>
            With a wealth of experience and a shared passion for excellence, our digital marketing professionals are poised to transform your online presence.
            At Digital Pulse Marketing, we don't just meet expectations; we exceed them. Trust us to craft bespoke web solutions that align perfectly with your strategic objectives, driving long-term success for your business.
            </p>

        </div>
         
         <div className='about-history-container'>
            <h1 className='about-history-heading'>
                Our History
            </h1>
            <p className='about-history-para'>
                Digital Pulse Marketing was Founded by <span className='highlighter-about'>Abi Nandhan</span>.Abi Nandhan's journey into entrepreneurship was ignited by a deep-seated passion for business and technology. 
                <br/>
                Drawing from his inherent enthusiasm for both business and technology, Abi embarked on a path fueled by creativity and vision. Recognizing the transformative power of technology in shaping the future landscape of commerce, he sought to harness its potential to drive positive change and innovation.
                <br/>
                <br/>
                The Digital Marketing Pulse was started in 2024 as startup the small team with high passion and skills solving the problems and to increase the customer satisfaction as their key goal.And in Future we are planning to expand our service to other countries.</p>

         </div>
         <div className='about-growth-container'>
            <h1 className='about-growth-heading'>Looking To Increase your Business?</h1>
            <p className='about-growth-para'>Whether you're seeking assistance with strategy, Content Marketing, search engine optimization, or any other aspect, we're here to lend a hand. Let us know your needs, and we'll promptly respond to help you elevate your business to new heights
</p>
<div className='about-growth-button-container'>
    <button type='button' className='about-grwoth-button-container'> 
    <Link to='/contact/' className='common-styles'>
    Empower Your Business 
    </Link>
    </button>

</div>

         </div>
    </div>
    </>
)
export default About 