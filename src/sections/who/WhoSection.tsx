import {
  Box,
  Container,
  Stack,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/layout";
// import Image from "next/image";

// import { TextStack } from "../../components/text-animations";
import { ContentGenerator } from "components/text-section";
import content from "./content.json";

export const WhoSection = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Center p={10}>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
          <GridItem colSpan={[12, 6, 6]}>
            <Stack spacing={2}>
              <ContentGenerator content={content} name="who-section" />
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
