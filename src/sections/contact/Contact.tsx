import "./Contact.css";
import { contactDetails } from "../../content/ContactContent";
export default function Contact() {
    const ICONSIZE = 17;
    return (
        <div className="contact-section">
            <h1>Contact Me</h1>
            <p>My communication channels, created to keep me connected</p>
            <div className="contact-flex-container">
                {
                    contactDetails.map((detail, key) => (
                        <a className="button-link contact-link"
                           href={detail.url}
                           target="_blank"
                           key={"contact-item" + key}
                        >
                            <img 
                              src={detail.img} 
                              width={ICONSIZE} 
                              height={ICONSIZE}
                            >
                            </img>
                            
                            {detail.label}
                    </a> 
                    ))
                }
            </div>
        </div>
    )
}