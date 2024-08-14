import linkedinUrl from "/LinkedInIcon.svg";
import githubUrl from "/GithubIcon.svg";
import emailUrl from "/EmailIcon.svg";

export interface ContactDetail {
    label: string,
    img: string,
    url: string
}

const linkedIn: ContactDetail = {
    label: "LinkedIn",
    img: linkedinUrl,
    url: "https://www.linkedin.com/in/jcala02/"
}

const github: ContactDetail = {
    label: "GitHub",
    img: githubUrl,
    url: "https://github.com/JCalago02"
}

const email: ContactDetail = {
    label: "Email",
    img: emailUrl,
    url: "mailto:jcalago02@gmail.com"
}

export const contactDetails: ContactDetail[] = [linkedIn, github, email];