import { ExperieceItemProps } from "../sections/experience/ExperienceItem";

export const experienceOne: ExperieceItemProps = {
    id: 1,
    startDate : "Aug 2024",
    endDate : "Present",
    company : "BP",
    role : "Core Strategy Analyst Intern",
    bullets: ["Incoming 2024 - Trading & Shipping Division: Fundamental Modeling and Innovation"],
    technologies: ["Python", "PowerBI", "Dataiku", "Plotly"]
}
export const experienceTwo: ExperieceItemProps = {
    id: 2,
    startDate : "May 2024",
    endDate : "Aug 2024",
    company : "CME Group",
    role : "Software Engineer in Test Intern",
    bullets: ["Worked on a multithreaded data aggregation application which subscribed to output streams from the match engines, filtered for Credit/Position Limit Updates and dispatched relevant data to downstream applications",
              "Prepared the application for migration from on-premises servers to GCP by migrating all integration tests onto GCP VMs and redesigning the fault-tolerance model to reduce server footprint"
        ],
    technologies: ["Java", "Apache Kafka", "Apache Zookeeper", "Spring", "Cucumber"]
}