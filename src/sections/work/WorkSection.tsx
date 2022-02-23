import { ReactNode, useRef } from "react";

import { Container, Box, Center, SimpleGrid, Stack } from "@chakra-ui/layout";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { useBreakpointValue } from "@chakra-ui/media-query";

// import { useInView } from "react-intersection-observer";
// import useDraggableScroll from "use-draggable-scroll";

import { WorkCard } from "./components";
// import { MotionBox } from "../../components/motion";
import { Heading } from "@chakra-ui/layout";
// import { AnimateChild } from "components/animation/StaggeredAnimation";
// import { easeProps } from "components/animation/variants";

import content from "./content.json";

const WORK_TYPES = ["current","work","ec"];

function filteredContent(searchTag: string) {
  return content.filter((el) => el.tags.includes(searchTag));
}

const CardGrid = ({
  children,
  isSmall,
}: {
  children: ReactNode;
  isSmall?: boolean;
}) => {
  const dragRef = useRef(null);
  // const { onMouseDown } = useDraggableScroll(dragRef);

  if (isSmall) {
    return (
      <Stack direction="column" pl={5} spacing={4}>
        {children}
      </Stack>
    );
  } else {
    return (
      <SimpleGrid columns={2} spacing={8} pr={4} pl={4}>
        {children}
      </SimpleGrid>
    );
  }
};

export const WorkSection = () => {
  const isSmall = useBreakpointValue({ base: true, md: false });

  return (
    <Box w="full" overflow="hidden">
      <Container
        maxW="container.lg"
        pt={16}
        pb={16}
        pr={0}
        pl={0}
        position="relative"
      >
        <Center w="100%" pb={10}>
           <Heading size="lg" letterSpacing="0.1rem" as="h1" color="gery">
            PROJECT
            </Heading>
        </Center>
        <Tabs
          variant="solid-rounded"
          colorScheme="blue"
          isLazy
          defaultIndex={0}
        >
           <TabPanels>
            {WORK_TYPES.map((el) => (
              <TabPanel pr={0} pl={0} pt={8} key={`${el}-tabPanel`}>
                  <CardGrid isSmall={isSmall}>
                    {filteredContent(el).map((item, index) => (
                      <WorkCard item={item} key={`${el}-${index}`} />
                    ))}
                  </CardGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
