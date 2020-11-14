import Container from "@components/Container";
import Recipes from "@components/List/Recipes";
import Title from "@components/Title";
import config from "@config/config";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";
import fetch from "node-fetch";
import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

type HomeProps = {
  homeContent: {
    content: string;
    title: string;
  };
  recipes;
};

const Home: FunctionComponent<HomeProps> = ({ homeContent, recipes }) => {
  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumScreen = !useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Container
        type={isMediumScreen === true ? "fullAuto" : "full"}
        bgcolor="primary.main"
      >
        <Container mb={6} display="flex" justifyContent="space-between">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mx={1}
          >
            <Title size={1}>{homeContent.title}</Title>
            <p style={{ fontSize: "20px" }}>
              <ReactMarkdown source={homeContent.content} />
            </p>
          </Box>
          <Box display={isSmallScreen === true ? "none" : ""} mx={3} m={-2}>
            <img width="350px" src="/image/food11.png" alt="" />
          </Box>
        </Container>
      </Container>

      <Container>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={isSmallScreen === true ? "column" : "row"}
          mb={2}
          mt={4}
          mx={1}
        >
          <Box mr={1}>
            <Title size={2}>Dernières recettes</Title>
          </Box>
          <Link href="/recettes">
            <Button variant="outlined" size="small">
              Voir toutes les recettes
            </Button>
          </Link>
        </Box>

        <Recipes recipes={recipes} />
      </Container>
    </>
  );
};

export default Home;

export async function getServerSideProps() {

  // home content request
  const reponseHome = await fetch(process.env.API_URL + "/home" /*, { agent: httpsAgent } */);
  const jsonResponseHome = (await reponseHome.json()) || [];

  // last receipts request
  const reponseRecipes = await fetch(
    process.env.API_URL + "/recipes?_limit=4&_sort=id:DESC"
  );
  const jsonResponseRecipes = (await reponseRecipes.json()) || [];

  return {
    props: {
      homeContent: {
        title: jsonResponseHome.title,
        content: jsonResponseHome.content,
      },
      recipes: jsonResponseRecipes,
    },
  };
}
