import anime from "animejs/lib/anime.es.js"
import get from "../utils/getElement.js"

export const startAnimationsStatic = () => {
  anime
    .timeline({
      easing: "easeInOutExpo",
    })
    .add({
      targets: "nav",
      opacity: [0, 1],
      translateY: ["-100%", 0],
    })
    .add(
      {
        targets: "#search-form",
        opacity: [0, 1],
        translateX: ["-25%", 0],
      },
      "-=500"
    )
}
