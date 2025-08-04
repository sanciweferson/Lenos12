// js/themeSystem.js

import { htmlElement } from "./themeEvents.js"

export function setupSystemThemeObserver() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", (e) => {
      const savedTheme = localStorage.getItem("theme")
      if (!savedTheme) {
        htmlElement.setAttribute("data-theme", e.matches ? "dark" : "light")
      }
    })
  } else {
    mediaQuery.addListener((e) => {
      const savedTheme = localStorage.getItem("theme")
      if (!savedTheme) {
        htmlElement.setAttribute("data-theme", e.matches ? "dark" : "light")
      }
    })
  }
}
