import "./index.css"
import { AiFillProject } from "react-icons/ai";

const Portfolio = () => {
    return <div className="portfolio-bg">
        <div className="about-top">
            <span className="about-span">My Portfolio</span>
            <AiFillProject className="about-icon" />
        </div>
        <hr className="hr" />
    </div>
}

export default Portfolio