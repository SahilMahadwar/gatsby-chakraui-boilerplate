import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: true,
};

const colors = {
  brandPurple: "#673FB4",
};

const theme = extendTheme({ config, colors });

export default theme;
