import "./Experience.css";
import {ExperienceItem} from "./ExperienceItem";
import { experienceOne, experienceTwo } from "../../content/ExperienceContent";
export default function Experience() {
    return (
        <div className="experience-section">
            <h1>Experience</h1>
            <p>My paid positions, driven by my interest in financial markets</p>
            <ExperienceItem {...experienceOne}></ExperienceItem>
            <ExperienceItem {...experienceTwo}></ExperienceItem>
        </div>
    )
}