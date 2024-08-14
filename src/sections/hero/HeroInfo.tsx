import "./HeroInfo.css"

function scrollToElement(className: string) {
    const element: Element = document.getElementsByClassName(className)[0];
    element.scrollIntoView({behavior: "smooth"});
}

export default function HeroInfo() {
    
    return (
        <div
            className="hero-section">
            <h1 className="hero-title">Jericho Calago</h1>
            <p>
                Bachelor's Student in Computer Science • Passionate About Data Driven Systems • Aspiring Backend Developer  
            </p> 
            <div className="hero-button-row">
                <button className="hero-button" onClick={() => scrollToElement("experience-section")}>My Experience</button>
                <button className="hero-button" onClick={() => scrollToElement("projects-section")}>My Projects</button>
                <button className="hero-button">Contact Me</button>
            </div>
                
        </div>
    )

}