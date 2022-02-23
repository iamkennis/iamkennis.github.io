import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Container,
  AspectRatio,
  Circle,
  Link,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
// import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { AnimateChild } from "components/animation";
import { easeProps } from "components/animation/variants";
import { MotionBox } from "../../components/motion";

import { REAL_EMAIL, RESUME_LINK } from "../../constants";
import { animatedParent } from "../../components/animation/variants";

const CIRCLE_VARIANTS = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.333, ease: easeProps, delay: 0.9 },
  },
};



export const HeroSection = () => {
  const [ref, inView] = useInView({
    rootMargin: `-250px 0px`,
    triggerOnce: true,
  });

  const greenGradient = useColorModeValue("green.100", "green.400");
  const blueGradient = useColorModeValue("purple.100", "blue.800");
  const borderColor = useColorModeValue("gray.200", "gray.500");
  const pinkCircle = useColorModeValue("blue.800", "pink.500");
  const pinkHighlight = useColorModeValue("blue.700", "pink.700");
  const WhiteBtn = useColorModeValue("blue.300", "gray.100");
  
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <MotionBox
      bgGradient={`linear(to-r,${blueGradient}, ${blueGradient})`}
      ref={ref}
      variants={animatedParent}
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="initial"
      overflow="hidden"
    >
      <Container maxWidth="container.lg">
        <Box h="3.5rem" />
        <Grid
          templateColumns="repeat(12, 1fr)"
          alignItems="center"
          minH="75vh"
          gap={[0, 4, 8]}
        >
          <GridItem
            colSpan={[12, 12, 7]}
            mt={isSmallScreen ? 16 : 0}
            pb={[8, 4, 0]}
          >
            <Stack spacing={8}>
              <AnimateChild>
                  <Heading as="h1" size="lg">
                  Hey! my name is 
                </Heading>
                <Heading as="h2">
                  Amodu Kehinde{" "}
                </Heading>
                <Heading as="h2" color={pinkCircle}>
                 Software Developer
                </Heading>
              </AnimateChild>
              <AnimateChild>
                <Text fontWeight="bold" colorScheme="gray">
                  Am available for a Jnr Software Developer role (Front-end/Back-end)!
                </Text>
              </AnimateChild>
              <AnimateChild>
                <Stack direction="row" spacing={4}>
                  <Button
                    bgColor={pinkCircle}
                    textColor={WhiteBtn}
                    href={`mailto:${REAL_EMAIL}`}
                    as={Link}
                  >
                    Let&apos;s chat!
                  </Button>
                  <Button
                    variant="ghost"
                    as={Link}
                    isExternal
                    href={RESUME_LINK}
                  >
                  PDF Resume
                  </Button>
                </Stack>
              </AnimateChild>
            </Stack>
          </GridItem>
          <GridItem
            colSpan={[12, 12, 5]}
            position="relative"
            p={[0, 2, 12]}
            pb={[4, 4, 0]}
          >
            <AnimateChild>
              <AspectRatio ratio={10 / 10}>
                <Box
                  w="90%"
                  borderRadius="xl"
                  className="adaptive-glass"
                  borderColor={borderColor}
                  borderWidth="5px"
                  zIndex={9999}
                >
                  <Stack textAlign="center">
                    <Image
                      src="/static/amoduKehinde.jpg"
                      alt="image of me"
                      width="1000rem"
                      height="1000rem"
                    />
                  </Stack>
                </Box>
              </AspectRatio>
            </AnimateChild>
            <MotionBox variants={CIRCLE_VARIANTS}>
              <Circle
                size="30vh"
                bg={pinkHighlight}
                position="absolute"
                bottom="-20"
                right="-50"
                zIndex={0}
              />
              <Circle
                size="30vh"
                bg={pinkHighlight}
                position="absolute"
                top="-30"
                left="-50"
                zIndex={0}
              />
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </MotionBox>
  );
};
