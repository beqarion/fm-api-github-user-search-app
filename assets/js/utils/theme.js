import get from "./getElement.js"

const userTheme = localStorage.getItem("theme")
const isSystemThemeDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches

const lightBtn = get("#light")
const darkBtn = get("#dark")
const themeToggle = get("#theme-switch")

export const iconToggle = () => {
  themeToggle.classList.toggle("dark-theme")
}
export const themeCheck = () => {
  if (true || (!userTheme && isSystemThemeDark)) {
    document.documentElement.classList.add("dark")
    iconToggle()
    return
  }
}

export const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    iconToggle()
    return
  }
  document.documentElement.classList.add("dark")
  localStorage.setItem("theme", "dark")
  iconToggle()
}
