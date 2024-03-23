const myImage = require("../src/assets/images/dani_image_1.jpeg");
const imovel1 = require("../src/assets/images/imovel1.jpg");
const imovel2 = require("../src/assets/images/imovel2.jpg");
const imovel3 = require("../src/assets/images/imovel3.png");
const imovel4 = require("../src/assets/images/imovel4.jpg");
const logotext = "Daniela Gordinho | RE/MAX";
const meta = {
    title: "Daniela Gordinho - Consultora Imobiliaria",
    description: "Para o negócio que deseja fazer, acaba de encontrar tua ajuda profissional",
};

const introdata = {
    title: "Estou aqui para",
    animated: {
        first: "Entender o teu momento.",
        second: "Apresentar-te as minhas soluções.",
        third: "Realizarmos teu objetivo.",
    },
    description: "Olá! Sou a Daniela Gordinho, sua consultora imobiliaria e estou aqui para te ajudar. Se ainda não encontrou o que procura em Meus Imóveis, entre em contato comigo através dos meus canais. Estou ansiosa para falar contigo e saber no que e como eu posso lhe ajudar.",
    your_img_url: myImage,
};

const dataabout = {};

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

const dataportfolio = [
    {
        img: imovel2,
        description: "Loja à venda em Vila Nova de Gaia",
        link: "https://www.remax.pt/imoveis/venda-loja-tvila-nova-de-gaia-santa-marinha-e-sao-pedro-da-afurada/124231389-4",
    },
    {
        img: imovel4,
        description: "Moradia T3 à venda em Vila Nova de Gaia",
        link: "https://www.remax.pt/imoveis/venda-moradia-t3-vila-nova-de-gaia-pedroso-e-seixezelo/124231389-2",
    },
    {
        img: imovel3,
        description: "Apartamento T2 à venda em Vila Nova de Gaia",
        link: "https://www.remax.pt/imoveis/venda-apartamento-t2-vila-nova-de-gaia-mafamude-e-vilar-do-paraiso/124231389-3",
    },
    {
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