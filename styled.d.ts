import "styled-components";
import type { theme } from "~/styles/theme/theme";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
