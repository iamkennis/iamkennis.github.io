// import { useState } from "react";
import { Box } from "@chakra-ui/layout";
// import { useBoolean } from "@chakra-ui/hooks";

// import { useRouter } from "next/router";

import {
  HeroSection,
  WhoSection,
  WorkSection,
  ValuesSection,
  SkillsSection,
  FinalSection,
} from "../sections";

const Home = () => {
  // const router = useRouter();


  return (
    <Box w="full">
      <HeroSection />
       <WhoSection />
      <ValuesSection />
      <SkillsSection />
      <WorkSection />
      <FinalSection/>
    </Box>
  );
};

export default Home;
