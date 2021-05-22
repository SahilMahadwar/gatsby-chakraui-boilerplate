import * as React from "react";

import { Box, Button, useColorMode } from "@chakra-ui/react";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button bg="brandPurple" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Box w="400px" h="400px" bg="brandPurple"></Box>
    </div>
  );
};

export default IndexPage;
