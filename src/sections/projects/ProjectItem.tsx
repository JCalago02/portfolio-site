import "./ProjectItem.css";

export interface ProjectItemProps {
    id: number,
    name: string,
    date: string,
    isSelected: boolean,
    clickHandler: () => void;
}

export function ProjectItem({
    id,
    name,
    date,
    isSelected,
    clickHandler
}: ProjectItemProps) {
    console.log(id)
    const classNameStr: string = "project-item-label" +  (isSelected ? " project-highlight" : "");
    return (
        <div 
            className= {classNameStr}
            onClick = {() => clickHandler()}
        >
            <p className="project-item-title">{name}</p>
            <p className="project-item-date">{date}</p>

        </div>
    )
}