import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import ThemeProdider from "../src/Theme";

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      custom: {
        name: "custom",
        styles: {
          width: "414px",
          height: "896px",
        },
      },
    },
  },
});

addDecorator((storyFn) => <ThemeProdider>{storyFn()}</ThemeProdider>);
