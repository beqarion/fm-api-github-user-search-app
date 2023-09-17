import { fetchUser } from "./utils/fetchUser.js"
import { displayResult } from "./utils/displayResult.js"
import { themeCheck, themeSwitch } from "./utils/theme.js"
import { startAnimationsStatic } from "./animations/initial-static.js"
import data from "../data/data.json"
import get from "./utils/getElement.js"

const URL = "https://api.github.com/users"

const form = get("#search-form")
const search = get("#search")
const lightBtn = get("#light")
const darkBtn = get("#dark")

const start = async (url) => {
  const data = await fetchUser(url)
  displayResult(data)
}

document.addEventListener("DOMContentLoaded", () => {
  themeCheck()
  displayResult(data)
})
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = search.value
  const userUrl = `${URL}/${input}`
  start(userUrl)
})
darkBtn.addEventListener("click", () => {
  themeSwitch()
})
lightBtn.addEventListener("click", () => {
  themeSwitch()
})

startAnimationsStatic()
