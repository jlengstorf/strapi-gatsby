export const setColor = {
  accentColor: "#C700EB",
  mainBlack: "#111111",
  offWhite: "#fafafa",
  White: "#ffffff",
  // Strapi - #2F7FE9 Jason- #c700eb gatsby #663399
  mainGrey: "#333",
  lightGrey: "#939393",
}

export const setFontFamily = {
  main: 'font-family: "Quattrocento Sans", sans-serif; font-weight: 400;',
  serif: 'font-family: "Quattrocento", serif; font-weight: 700;',
}

export const setFontSize = {
  larger: "font-size: 1.2rem;",
}

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`
}

export const theme = {
  display: "flex",
  borderLeft: "none",
  borderRight: "none",
  padding: "0",
  width: "12.5vw",
  gridGap: "0",
  transition: "none",
  boxShadow: "none",
  displayH2: "none",
}

export const themeAside = {
  display: "grid",
  borderLeft: "1px solid" + setColor.accentColor,
  borderRight: "1px solid" + setColor.accentColor,
  padding: "1rem",
  width: "100%",
  gridGap: "1rem",
  transition: "200ms box-shadow linear",
  boxShadow: "0 2px 14px" + setColor.mainGrey,
  displayH2: "block",
}
