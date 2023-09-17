import anime from "animejs/lib/anime.es.js"
import get from "../utils/getElement.js"

export const startAnimationsDynamic = () => {
  const repos = get("#repos span")
  const followers = get("#followers span")
  const following = get("#following span")

  anime
    .timeline({
      easing: "easeInOutExpo",
    })
    .add(
      {
        targets: "#user-container",
        opacity: [0, 1],
        translateX: ["25%", 0],
      },
      "-=700"
    )
    .add(
      {
        targets: "#user-container section",
        opacity: [0, 1],
        width: [0, "100%"],
      },
      "-=700"
    )
    .add(
      {
        targets: repos,
        textContent: [0, repos.value],
        round: 1,
      },
      "-=500"
    )
    .add(
      {
        targets: followers,
        textContent: [0, followers.value],
        round: 1,
        duration: 2000,
      },
      "-=1000"
    )
    .add(
      {
        targets: following,
        textContent: [0, following.value],
        round: 1,
        duration: 2000,
      },
      "-=2000"
    )
}
