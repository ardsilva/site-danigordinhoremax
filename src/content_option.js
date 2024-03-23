const myImage = require("../src/assets/images/dani_image_1.jpeg");
const imovel1 = require("../src/assets/images/imovel1.jpg");
const logotext = "DG | Remax | GL";
const meta = {
    title: "Daniela Gordinho - Remax - GL",
    description: "Esse é meu site profissional",
};

const introdata = {
    title: "Permita-me",
    animated: {
        first: "Ajudar-te a realizar teu sonho.",
        second: "Conhecer-te melhor.",
        third: "Apresentar-te as minhas soluções.",
    },
    description: "Sou a Daniela Gordinho e estou aqui para te ajudar, abaixo, encontrará meus imóveis e tambem meu contato. Estou ansiosa para falar contigo e saber no que eu posso lhe ajudar.",
    your_img_url: myImage,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: imovel1,
        description: "Escritório para arrendar em Vila Nova de Gaia",
        link: "https://www.remax.pt/imoveis/arrendamento-escritorio-tvila-nova-de-gaia-mafamude-e-vilar-do-paraiso/124231389-1",
    },
];

const contactConfig = {
    YOUR_EMAIL: "danigordinho@remax.pt",
    YOUR_FONE: "+351 914252666",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://www.facebook.com/daniela.gordinho",
    instagram: "https://www.instagram.com/danielaremaxgl/",
    tiktok: "https://www.tiktok.com/@danielagordinho"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};