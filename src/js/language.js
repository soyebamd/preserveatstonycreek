// language translator V0.1

//English
const englishLang = {
  navbar: {
    logo_alt: "Preserve at Stony Creek",
    contact: "CONTACT US",
  },

  banner: {
    heading: "PRESERVE AT STONY CREEK",
  },

  ourVision: {
    tag: "OUR VISION",
    heading: "Reimagining Norristown State Hospital",
    desc: "The Preserve at Stony Creek reimagines the former Norristown State Hospital as a destination for current and future residential, commercial, technology and innovation development, job creation, and retail experiences, while connecting to the existing amenities of Norristown State Park, Elmwood Zoo, and all of the benefits which exist in the heart of Montgomery County.",
    featureList_title: [
      "36,000 square feet",
      "202,000 square feet",
      "453 New homes",
      "288 Apartments",
    ],
    featureList_desc: [
      "supermarket and restaurants",
      "flex/tech/office space",
      "modern affordable housing",
      "modern amenities",
    ],
  },

  leadDeveloper: {
    tag: "DEVELOPER",
    heading: "PRDC Lead Developer",
    desc: "Pinnacle Realty Development Company was started by David Perlman and Anthony Maras to acquire developable properties, often in blighted and/or underserved areas. David and Tony are proud of their accomplishments on projects such as 650 Fairmount (407 unit redevelopment in Philadelphia); The Heid Building (adaptive re-use in Philadelphia), 600,000 sq ft High-Bay cold/ambient Automated Storage building in Middletown, De, River Pointe (618 total units in Bridgeport, PA).",
  },
};

//Spanish
const spanishLang = {
  navbar: {
    logo_alt: "Reserva en Stony Creek",
    contact: "CONTÁCTENOS",
  },
  banner: {
    heading: "CONSERVAR EN STONY CREEK",
  },
  ourVision: {
    tag: "NUESTRA VISIÓN",
    heading: "Reimaginando el Hospital Estatal de Norristown",
    desc: "The Preserve at Stony Creek reinventa el antiguo Hospital Estatal de Norristown como un destino para el desarrollo residencial, comercial, de tecnología e innovación, la creación de empleo y las experiencias minoristas actuales y futuras, al tiempo que se conecta con las comodidades existentes del Parque Estatal Norristown, el Zoológico de Elmwood y todos de los beneficios que existen en el corazón del condado de Montgomery.",
    featureList_title: [
      "36,000 pies cuadrados",
      "202,000 pies cuadrados",
      "453 viviendas nuevas",
      "288 Apartamentos",
    ],
    featureList_desc: [
      "supermarket and restaurants",
      "supermercado y restaurantes",
      "vivienda moderna y asequible",
      "comodidades modernas",
    ],
  },

  leadDeveloper: {
    tag: "DESARROLLADORA",
    heading: "Desarrollador líder del PRDC",
    desc: "Pinnacle Realty Development Company fue fundada por David Perlman y Anthony Maras para adquirir propiedades urbanizables, a menudo en áreas arruinadas y/o desatendidas. David y Tony están orgullosos de sus logros en proyectos como 650 Fairmount (reurbanización de 407 unidades en Filadelfia); El edificio Heid (reutilización adaptativa en Filadelfia), edificio de almacenamiento automatizado en frío/ambiente de gran altura de 600 000 pies cuadrados en Middletown, Delaware, River Pointe (618 unidades en total en Bridgeport, PA).",
  },
};

// const { navbar } = spanishLang;

const language = [englishLang, spanishLang];

let setLang;

const lang = document.querySelectorAll(".langbtn");

const logo = document.querySelectorAll(".logo");
const contactBtn = document.querySelector("#btn-contact");
const bannerHeading = document.querySelector(".bannerHeading");
// our vision
const superheadline = document.querySelector(".superheadline");
const superheadline2 = document.querySelector(".superheadline2");
const supertext = document.querySelector(".supertext");
const icons_text = document.querySelectorAll(".icons_text");

// lead-developer

const leadDeveloper = document.querySelector(".lead-developer");

lang.forEach((langBtn) => {
  langBtn.addEventListener("click", function () {
    const checkLang = this.getAttribute("data-lang");

    lang.forEach((btn) => btn.classList.remove("active"));

    if (checkLang == "spanish") {
      setLang = language[1];
      this.classList.add("active");
    } else {
      setLang = language[0];
      this.classList.add("active");
    }

    console.log(setLang);
    console.log(setLang);

    language.forEach((lang, index) => {
      logo[0].setAttribute("alt", setLang.navbar.logo_alt);
      contactBtn.textContent = setLang.navbar.contact;
      bannerHeading.textContent = setLang.banner.heading;
      superheadline.textContent = setLang.ourVision.tag;
      superheadline2.textContent = setLang.ourVision.heading;
      supertext.textContent = setLang.ourVision.desc;

      setLang.ourVision.featureList_title.forEach((superFeature, i) => {
        console.log(superFeature, i);

        icons_text[i].querySelector(".h4").textContent = superFeature;
        icons_text[i].querySelector("p").textContent =
          setLang.ourVision.featureList_desc[i];
      });

      leadDeveloper.querySelector(".superheadline").textContent =
        setLang.leadDeveloper.tag;

      leadDeveloper.querySelector(".superheadline2").textContent =
        setLang.leadDeveloper.heading;

      leadDeveloper.querySelector("p").textContent = setLang.leadDeveloper.desc;
    });
  });
});

// Get Element from page

// logo
