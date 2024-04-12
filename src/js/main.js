import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

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
