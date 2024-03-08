import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text
export const whatHeroHeader = style({
  maxWidth: "1108px",
})

export const whatHeroText = style({
  fontSize: theme.fontSizes[3],
  marginBottom: theme.space[5],
  maxWidth: "798px",
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[4],
    },
  },
})

export const whatHeroImage = style({
  width: "100%",
})
