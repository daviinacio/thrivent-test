import "styled-components";
import { LightTheme } from "./theme";

type Theme = typeof LightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
