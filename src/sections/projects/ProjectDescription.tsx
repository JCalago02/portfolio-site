import "./ProjectDescription.css";
import { projectContent, projects } from "../../content/ProjectsContent"
export default function ProjectDescription({activeValue} : {activeValue: number}) {
    const activeProject: projectContent = projects[activeValue];
    return (
        <div className="project-description">
            <img className="project-image" src={activeProject.img} width={500} height={250}></img>
            <p className="project-text">{activeProject.description}</p>
            {
                activeProject.link.length > 0 &&
                    <a 
                        href={activeProject.link} 
                        target="_blank" 
                        className="button-link project-link"
                    >
                            See Source
                    </a>
            }
        </div>
    )
}