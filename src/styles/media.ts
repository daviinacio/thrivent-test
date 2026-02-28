import { theme } from "./theme";

export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.tablet})`,
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`,
};
