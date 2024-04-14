$(".slide-show").slick({
  fade: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,

  dots: true,

  arrows: true,

  prevArrow: "#move-left",
  nextArrow: "#move-right",

  focusOnSelect: true,
  pauseOnHover: false,
});

const form = document.getElementById("form");
const result = document.getElementById("result");

const lang = document.querySelectorAll(".langbtn");
let checkLang = "english";
lang.forEach((currentlang) => {
  currentlang.addEventListener("click", function () {
    // console.log("CURRENT LANGUAGE SELEGED" + this.getAttribute("data-lang"));

    checkLang = this.getAttribute("data-lang");
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  if (checkLang == "english") {
    result.innerHTML = "Wait Please...";
  } else {
    result.innerHTML = "Espere por favor...";
  }

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();

      if (response.status == 200) {
        if (checkLang == "english") {
          result.innerHTML = `
        
        <span id="close">
        
        <i class="fa-solid fa-xmark"></i>
        </span>
        
        <p>Thank you for your interest in The Preserve at Stony Creek! We appreciate you taking the time to reach out to us. Your submission has been received, and one of our team members will be in touch shortly to provide more information and answer any questions you may have.</p>
          
          <p>Best regards,</p>

          <p><strong>The Preserve at Stony Creek Team</strong></p>`;
        } else {
          result.innerHTML = `<span id="close">
        
<i class="fa-solid fa-xmark"></i>
</span>
        
<p>¡Gracias por tu interés en The Preserve at Stony Creek! Apreciamos que te hayas tomado el tiempo de contactarnos. Hemos recibido tu mensaje y uno de nuestros miembros del equipo se pondrá en contacto contigo pronto para proporcionarte más información y responder cualquier pregunta que puedas tener.</p>
          
<p>Saludos cordiales,</p>

<p><strong>El equipo de The Preserve at Stony Creek</strong></p>
`;
        }
      } else {
        console.log(response);
        if (checkLang == "english") {
          result.innerHTML = "Some Error Detected";
        } else {
          result.innerHTML = "Se detectó algún error";
        }
      }
    })
    .catch((error) => {
      console.log(error);
      if (checkLang == "english") {
        result.innerHTML = "Something went wrong!";
      } else {
        result.innerHTML = "Algo salió mal!";
      }
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        const close = document.getElementById("close");
        result.style.display = "block";
        form.style.display = "none";

        close.addEventListener("click", function () {
          result.style.display = "none";
          form.style.display = "block";
        });
      }, 0);
    });
});
