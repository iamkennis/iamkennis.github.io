import { Box, Stack, Text,Heading,Center, Link } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";

// import Image from "next/image";

export const FunFacts = () => {
  const CardText = useColorModeValue("gray.500", "gray.400");
  const HighlightText = useColorModeValue("blue.500", "blue.300");
  const CardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <>
     <Center w="100%" pt={15} pb={10}>
      <Heading size="lg" letterSpacing="0.1rem" as="h1" color="gery">
        EXPERIENCE
        </Heading>
         
      </Center>
    <Box bg={CardBg} borderRadius="lg" p={8} position="relative">
    <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Zebullon Developer Network {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer Intern</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>May 2020 - August 2021</Text>
        <Text color={CardText}>Create and design clients-side application websites, with React/Redux/Sass</Text>
      </Stack>
    </Box>
    <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
      <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            UpWork
          </Text>
           <chakra.span color={CardText} fontWeight="bold" className="wrap">Frontend Developer Freelancer</chakra.span>
        <Text fontWeight="bold" color={HighlightText}>Septemeber 2021 - Present</Text>
        <Text fontWeight="bold" color={CardText}>Frontend Developer Freelancer</Text>
        <Text color={CardText}>
          Helping clients to build a scalable website with JavaScript/React/Redux{" "}
          {/* <chakra.span className="no-wrap">¯\_(ツ)_/¯</chakra.span> */}
        </Text>
      </Stack>
      </Box>
      </>
  );
};
