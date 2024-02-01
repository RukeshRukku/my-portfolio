import "./index.css"
import { IoIosInformationCircle } from "react-icons/io";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const About = () => {
    return <div className="about-bg">
        <div className="about-top">
            <span className="about-span">About Me</span>
            <IoIosInformationCircle className="about-icon" />
        </div>
        <hr className="hr" />
        <div className="about-bottom">
            <div className="about-bottom-left">
                <p className="about-head">Frontened Developer</p>
                <p>A front-end developer builds the front-end portion of websites and web 
                    applications—the part users see and interact with. A front-end developer 
                    creates websites and applications using web languages such as HTML, CSS, 
                    and JavaScript that allow users to access and interact with the site or app
                    Everything on the page from the logo to the search bar, buttons, overall layout
                    and how the user interacts with the page was created by a front end developer. 
                    Front end developers are in charge of the look and feel of the website.
                </p>
                <hr className="hr" style={{marginTop: "20px", marginBottom: "20px"}} />
                <p className="about-head">Personal Information</p>
                <p><span>Name:</span> Rukesh Guditi</p>
                <p><span>Age:</span> Rukesh Guditi</p>
                <p><span>Address:</span> Rukesh Guditi</p>
                <p><span>Email:</span> Rukesh Guditi</p>
                <p><span>Contact No:</span> Rukesh Guditi</p>
            </div>
        <div className="about-bottom-right">
            <ul className="diagram">
                <li className="about-list" style={{"--i": 1}}>
                <BsAndroid2 className="diagram-icons"/>
                </li>
                <li className="about-list" style={{"--i": 2}}>
                <FaApple className="diagram-icons" />
                </li>
                <li className="about-list" style={{"--i": 3}}>
                <FaDatabase className="diagram-icons" />
                </li>
                <li className="about-list" style={{"--i": 4}}>
                <FaDev className="diagram-icons" />
                </li>
            </ul>
        </div>
        </div>
    </div>
}

export default About