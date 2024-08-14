export interface ContactDetail {
    label: string,
    img: string,
    url: string
}

const linkedIn: ContactDetail = {
    label: "LinkedIn",
    img: "/LinkedInIcon.svg",
    url: "https://www.linkedin.com/in/jcala02/"
}

const github: ContactDetail = {
    label: "GitHub",
    img: "/GithubIcon.svg",
    url: "https://github.com/JCalago02"
}

const email: ContactDetail = {
    label: "Email",
    img: "/EmailIcon.svg",
    url: "mailto:jcalago02@gmail.com"
}

export const contactDetails: ContactDetail[] = [linkedIn, github, email];