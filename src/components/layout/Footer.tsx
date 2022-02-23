import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  // Stack,
  // List,
  // ListItem,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { useColorModeValue } from "@chakra-ui/color-mode";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoGlobeOutline,
  IoPhonePortrait,
  IoPhonePortraitSharp,
} from "react-icons/io5";

const SOCIAL_MEDIA = [
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/amodu-kehinde/",
    alt: "LinkedIn",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/iamkennis",
    alt: "Github",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/iamkennis_",
    alt: "Twitter",
  },
  {
    icon: <IoPhonePortraitSharp />,
    url: "08108444864",
    alt: "Website",
  },
];
const Footer = () => {
  const CardBg = useColorModeValue("gray.100", "gray.700");

  const socialsMarkup = SOCIAL_MEDIA.map(({ icon, url, alt }) => (
    <Button
      href={url}
      key={alt}
      colorScheme="blue"
      size="lg"
      variant="ghost"
      as={ChakraLink}
      isExternal
      fontSize="1.5rem"
    >
      <VisuallyHidden>{alt}</VisuallyHidden>
      {icon}
    </Button>
  ));

  return (
    <Box w="full" bg={CardBg} as="footer" pt={12} pb={12}>
      <Container maxWidth="container.lg">
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={[12, null, 6]} pb={8}>
            <Heading size="md" pb={4}>
              My Links
            </Heading>
            {socialsMarkup}
          </GridItem>
        </Grid>
        <Box pt={8}>
          <Text>
            © {new Date().getFullYear()} -{" "}
            <ChakraLink href="" isExternal>
              Amodu Kehinde
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
