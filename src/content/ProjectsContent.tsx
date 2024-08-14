export interface projectContent {
    id: number,
    name: string,
    date: string,
    description: string,
    img: string,
    link: string
}

const projectZero: projectContent = {
    id : 0,
    name : "IMC Prosperity",
    date: "Apr. 2024",
    description : "A trading bot implementing many common algorithmic trading strategies, callibrated on provided market data for IMC's Prosperity trading challenge",
    img : "src/assets/ProsperityScaled.png",
    link : ""
}

const projectOne: projectContent  = {
    id : 1,
    name : "Bollinger Band Analysis",
    date: "Feb. 2024",
    description : "An analysis of the usage of technical analysis indicators, such as Bollinger Bands, on historical Bitcoin data.",
    img : "src/assets/BollingerScaled.png",
    link: "https://github.com/JCalago02/uiuc-dining-sms/tree/main"
}

const projectTwo: projectContent  = {
    id : 2,
    name : "PeopleWeave",
    date: "Sept. 2023",
    description : "A full-stack co-authorship graph analysis tool, developed with the Caesar Research group @ UIUC.",
    img : "src/assets/PeopleWeaveScaled.png",
    link: ""
}

const projectThree: projectContent = {
    id : 3,
    name : "Dining Hall Messenger",
    date: "Jan. 2023",
    description : "An SMS bot enabling personalized daily dining hall updates for UIUC students.",
    img : "src/assets/IllinoisScaled.png",
    link: "https://github.com/JCalago02/uiuc-dining-sms/tree/main"
}

export const projects: projectContent[] = [projectZero, projectOne, projectTwo, projectThree];
