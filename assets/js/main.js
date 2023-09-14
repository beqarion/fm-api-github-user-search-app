import { fetchUser } from "./utils/fetchUser.js"
import { displayResult } from "./utils/displayResult.js"
import get from "./utils/getElement.js"

const URL = "https://api.github.com/users"
const localURL = "assets/js/utils/data.json"
let myUrl = `${URL}/beqarion`

const btn = get("#search-btn")
const form = get("#search-form")
const search = get("#search")

const start = async (url) => {
  const data = await fetchUser(url)
  displayResult(data)
}

document.addEventListener("DOMContentLoaded", () => {
  start(localURL)
})
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = search.value
  const userUrl = `${URL}/${input}`
  start(userUrl)
})
