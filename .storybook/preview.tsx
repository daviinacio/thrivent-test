import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import { GlobalStylesheet } from "../src/styles/global";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStylesheet />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
