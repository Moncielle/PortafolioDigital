//Declaración para mostrar el año en el footer
const getCurrentYear = () => {
    const d = new Date();
    return d.getFullYear();
};

const setYearIdentifier = () => {
    const printYearDOM = document.getElementById("yearIdentifier");
    printYearDOM.innerHTML = getCurrentYear();
};

//Arreglo de redes sociales para el footer
const SocialNetworks = [
    { name: "Facebook", url:"https://www.facebook.com/Luzzle.22/"},
    { name: "GitHub", url: "https://github.com/Moncielle"},
    { name: "Linkedin", url: "https://mx.linkedin.com/in/ingrid-monciel-lugo-martinez-b6b494171"},
    { name: "Gmail", url: ""},
];

//funcion para mostrar las redes sociales en el footer
function setSocialNetworksInHTML() {
    const tagSocialNetworks = document.getElementById("socialNetworks");
    var innerHTMLSocialNetworks = "";
    SocialNetworks.forEach((social) =>{
        let socialTemp
        if(social.name === "Facebook"){
            socialTemp = `<a class="social--burbble fa fa-facebook" href="${social.url}"></a>`; 
        }else if(social.name === "GitHub"){
            socialTemp = `<a class="social--burbble fa fa-github" href="${social.url}"></a>`; 
        }else if(social.name === "Linkedin"){
            socialTemp = `<a class="social--burbble fa fa-linkedin" href="${social.url}" ></a>`; 
        }else {
            socialTemp = `<a class="social--burbble fa fa-inbox" href="${social.url}"></a>`; 
        }
        innerHTMLSocialNetworks = innerHTMLSocialNetworks + socialTemp;
    });
    tagSocialNetworks.innerHTML = innerHTMLSocialNetworks;
}


//Arreglo de los proyectos que se insertaran en las tarjetas del main de html
const ProyectosDesarrollados = [
    {
      name: "Curriculum Vitae",
      descripcion: `Es un proyecto básico donde se describe mis experiencias, 
                    habilidades, conocimientos previos y técnicos, mi 
                    educación, entre otras cosas.`,
      imagen: "./img/CV.png",
      url: "https://github.com/Moncielle/Mi-CV.git",
      page:"https://moncielle.github.io/Mi-CV/",
      tecnologias: ["HTML", "CSS"],
      tiempoDesarrollo: "3 días",
    },
    {
      name: "Clon de Google",
      descripcion: `Este es un proyecto que es clon del 
                    navegador Google, tratando de asimilar todos
                    los componente que maneja.`,
      imagen: "./img/ClonGoogle.png",
      url: "https://github.com/Moncielle/Clon-Google.git",
      page: "https://moncielle.github.io/Clon-Google/",
      tecnologias: ["HTML", "CSS"],
      tiempoDesarrollo: "2 días",
    },
    {
        name: "Clon de Netflix",
        descripcion: `Este es un proyecto que consta de tres
                      ventanas, la de login, usuarios y la la
                      página principal de Netflix, donde se pueden
                      ver las opciones de series, peliculas, etc.`,
        imagen: "./img/Netflix.png",
        url: "https://github.com/Moncielle/Clon-Netflix.git",
        page:"",
        tecnologias: ["HTML", "CSS"],
        tiempoDesarrollo: "5 días",
    },
    {
        name: "Portafolio",
        descripcion: `Proyecto que consta de almacenar todos
                      los proyectos realizados durante mi 
                      vida profesional en desarrollo de FrontEnd.`,
        imagen: "./img/Portafolio.png",
        url: "https://github.com/Moncielle/PortafolioDigital.git",
        page:"",
        tecnologias: ["HTML", "CSS", "JS", "Bootstrap"],
        tiempoDesarrollo: "6 días",
    },
    {
        name: "GMBANK",
        descripcion: `Proyecto que consta de un banco digital que  
                      cuenta con tres ventanas, la de home, la de login,
                      y la página principal de movimientos, donde se pueden
                      ver las opciones de transferir, depositar, checar movimientos, etc`,
        imagen: "./img/GMBank.png",
        url: "https://github.com/Moncielle/Bank.git",
        page:"",
        tecnologias: ["HTML", "CSS", "JS"],
        tiempoDesarrollo: "7 días",
    }
];

//funcion para mostrar los tarjetas en el main
function setProyectosDesarrollados(){
    let card = "";
    ProyectosDesarrollados.forEach((project)=>{
        card = card +
        `<div class="col">
            <div class="card shadow-sm">
                <img src="${project.imagen}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-lg-center title">${project.name}</h5>
                    <p class="card-text text-lg-center">${project.descripcion}</p>
                    <p class="card-text text-lg-center time">Tiempo de desarrollo: ${project.tiempoDesarrollo}</p>
                    <div class="url">
                        <a class="card-text text-lg-center" href="${project.url}">Ver projecto</a>
                        <a class="card-text text-lg-center" href="${project.page}">Ver página</a>
                    </div>
                    <div class="row">
                        ${setIcons(project.tecnologias)}
                    </div>
                </div>
            </div>
        </div>`
    });
    document.getElementById("projects").innerHTML = card;
}

//función para colocar las tecnologías ocupadas 
function setIcons(tecnologias){
    let icons = "";
    tecnologias.forEach((tecno) => {
        switch(tecno){
            case "HTML":
                icons = icons + `<div class="col-3 icons-cards">
                                    HTML 
                                    <i class="fa-brands fa-html5 icons"></i>
                                </div>`
            break;
            case "CSS":
                icons = icons + `<div class="col-3 icons-cards">
                                    CSS 
                                    <i class="fa-brands fa-css3-alt icons"></i>
                                </div>`
            break;
            case "JS":
                icons = icons + `<div class="col-3 icons-cards">
                                    JS 
                                    <i class="fa-brands fa-js icons"></i>
                                </div>`
            break;
            case "Bootstrap":
                icons = icons + `<div class="col-3 icons-cards">
                                    B 
                                    <i class="fa-brands fa-bootstrap icons"></i>
                                </div>`
            break;
        }
    });
    return icons;
}

function aboutMe(){
    document.getElementById("aboutMe").addEventListener("click", aboutMe);
    document.getElementById("descriptionAboutMe").style.display ="";
}

function aceptAboutMe(){
    document.getElementById("acept").addEventListener("click", aceptAboutMe);
    document.getElementById("descriptionAboutMe").style.display ="none";
}

function about(){
    document.getElementById("about").addEventListener("click", about);
    document.getElementById("description").style.display ="";
}

function aceptAbout(){
    document.getElementById("aceptAbout").addEventListener("click", aceptAbout);
    document.getElementById("description").style.display ="none";
}


document.addEventListener("DOMContentLoaded", function(e){
    setYearIdentifier();
    setSocialNetworksInHTML();
    setProyectosDesarrollados();
    aboutMe();
    aceptAboutMe();
    about();
    aceptAbout();
});

