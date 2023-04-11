import "../styles/AboutMe.css"
import { skills } from "../assets/skills"
import ReactPlayer from "react-player/youtube";

function Video(props) {
    return ( 
        <div>
            <ReactPlayer url={props.url} playing={false} className="video" controls/>
        </div>
     );
}

function Skills() {
    const listItems = skills.map(i =>{
        const itemTxt = `${i.id}: ${i.skill}`
        return <li className="skill-item">{itemTxt}</li>
    })

    return ( 
        <div className="skills">
            <ul className="no-bullets">
                {listItems}
            </ul>
        </div>
     );
}

function AboutMe() {
    return ( 
        <div className="about-me">
            <h1>Ryan Petrucelli</h1>
            <img className="img" src={require("../assets/Headshot.jpg")} alt="Headshot"></img>
            <div className="description">
                <p>
                    Ryan is a driven young professional with a passion for frontend development. <br/>
                    After graduating from McGill University with a degree in Economics and Computer science in May 2021
                    he has gone on to work at Capgemini, first as a Quality Engineer and then as a Test Lead.
                    However, his passion has always been to pursue a career in software development, and he has remained
                    up-to-date working with the newest technologies while gaining experience in QA.
                </p>
                <h3 style={{margin:'10px'}}>Ryan's Top Skills</h3>
                <Skills />
            </div>
        </div>
     );
}

export default AboutMe;