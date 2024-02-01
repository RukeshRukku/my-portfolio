import "./index.css"
import { SiStandardresume } from "react-icons/si";

const Resume = () => {
    return <div className="resume-bg">
        <div className="about-top">
            <span className="about-span">Resume</span>
            <SiStandardresume className="about-icon" />
        </div>
        <hr className="hr" />
    </div>
}

export default Resume