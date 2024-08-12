import "./Experience.css";
import {ExperienceItem} from "./ExperienceItem";
import { experienceOne, experienceTwo } from "../../content/experience";
export default function Experience() {
    return (
        <div className="experience-section">
            <h1>Experience</h1>
            <ExperienceItem {...experienceOne}></ExperienceItem>
            <ExperienceItem {...experienceTwo}></ExperienceItem>
        </div>
    )
}