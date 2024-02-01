import "./index.css"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Home = () => {
    return <div className="home-bg">
        <span className="home-head">Hello, I'm <span className="head-span">Rukesh</span>. <br /> Front End Developer</span>
        <div className="home-flex">
            <button type="button" className="home-btn">Hire Me</button>
            <button type="button" className="home-btn">Download Resume</button>
        </div>
        <ul className="home-ul">
            <li><a href="" className="home-a"><CiLinkedin /></a></li>
            <li><a href="" className="home-a"><FaGithub /></a></li>
            <li><a href="" className="home-a"><FaInstagram /></a></li>
        </ul>
    </div>
}

export default Home