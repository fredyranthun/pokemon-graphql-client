import React from "react";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { Button, MantineProvider, Text } from "@mantine/core";
import CardsCarousel from "./components/Carousel";
import { PokemonsQuery } from "./queries/Pokemons";
import { PokemonsQuery$data } from "./queries/__generated__/PokemonsQuery.graphql";

const { Suspense } = React;

const preloadedQuery = loadQuery(RelayEnvironment, PokemonsQuery, {
  /* query variables */
  page: 1,
  take: 25,
});

function App(props: any) {
  const data = usePreloadedQuery(
    PokemonsQuery,
    props.preloadedQuery
  ) as PokemonsQuery$data;

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Pokemon App!</Text>
      {data?.pokemons && <CardsCarousel pokemons={data.pokemons} />}
      <Button onClick={() => {}}>Load more Pokemons</Button>
    </MantineProvider>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
