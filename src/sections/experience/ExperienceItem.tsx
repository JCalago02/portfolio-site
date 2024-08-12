import "./ExperienceItem.css";
export interface ExperieceItemProps {
    id: number, 
    startDate: string,
    endDate: string,
    company: string,
    role: string,
    bullets: string[],
    technologies: string[]
}

export function ExperienceItem({
        id,
        startDate,
        endDate,
        company,
        role,
        bullets,
        technologies
    }: ExperieceItemProps) {
    return (
        <div className="experience-box">
            <div className="experience-box-l">
                <div>{startDate} - {endDate}</div>
            </div>
            <div className="experience-divider">&nbsp;</div>
            <div className="experience-box-r">

                <p className="experience-title-p"><span className="experience-title-text">{company}</span> - {role}</p>
                <div>
                    {
                        bullets.map((bullet, key) => (
                            <p key={"exp-b" + id + key}>{bullet}</p>
                        ))
                    }
                </div>
                <div className="experience-tech-container">
                    {
                        technologies.map((tech, key) => (
                            <div key={"exp-t" + id + key} className="experience-tech-card">{tech}</div>
                        ))
                    }
                </div>                    
            </div>
        </div>

    )
}