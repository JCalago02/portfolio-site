import "./Projects.css";
import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { projects, projectContent } from "../../content/ProjectsContent";
import ProjectDescription from "./ProjectDescription";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(1);
    const [inTransition, setInTransition] = useState(false); 
    function mapProjectToItemProps(project: projectContent) {
        const props = {
            id: project.id,
            name: project.name,
            date: project.date,
            isSelected: (selectedProject === project.id),
            clickHandler: () => {

                const projectChanging: boolean = project.id != selectedProject; 
                if (projectChanging) {
                    setInTransition(true);
                    setTimeout(() => {
                        setSelectedProject(project.id);
                        setInTransition(false); 
                    }, 200);
                }
            }
        }
        return props;
    }

    return (
        <div className = "projects-section">
            <h1 className="projects-header">Projects</h1>
            <p className="projects-header-text">My personal work, spearheaded by my love for Computer Programming</p>
            <div className="projects-flexbox">
                <div className="projects-flexbox-l">
                    {
                        projects.map((project, key) => (
                            <ProjectItem key={"project-item" + key}{...mapProjectToItemProps(project)}></ProjectItem>
                        ))
                    }
                </div>
                <div className= {`projects-flexbox-r ${inTransition ? 'hide' : 'show'}`}>
                    <ProjectDescription activeValue={selectedProject}></ProjectDescription>
                </div>
            </div>
        </div>
    )
}