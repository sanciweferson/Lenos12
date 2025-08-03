// js/menu/menuEvents.js

import {
  menuToggleButton,
  sideMenu,
  openSideMenu,
  closeSideMenu,
  MOBILE_BREAKPOINT,
} from "./menuActions.js"

export const setupMenuToggle = () => {
  menuToggleButton.addEventListener("click", () => {
    const isOpen = sideMenu.classList.contains("open")
    isOpen ? closeSideMenu() : openSideMenu()
  })
}

export const setupMenuStateOnLoad = () => {
  const menuOpenSaved = localStorage.getItem("menuOpen") === "true"
  if (menuOpenSaved && window.innerWidth <= MOBILE_BREAKPOINT) {
    openSideMenu()
  } else {
    closeSideMenu()
  }
}

export const setupMenuResizeHandler = () => {
  window.addEventListener("resize", () => {
    if (
      window.innerWidth > MOBILE_BREAKPOINT &&
      sideMenu.classList.contains("open")
    ) {
      closeSideMenu()
    }
  })
}
