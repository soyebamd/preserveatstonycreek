import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

$(".slide-show").slick({
  fade: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 3000,
  infinite: true,

  dots: true,

  focusOnSelect: true,
  pauseOnHover: false,
});
