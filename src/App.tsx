import React, { useState } from "react";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import {
  Button,
  Center,
  Grid,
  MantineProvider,
  Text,
  Title,
} from "@mantine/core";
import { PokemonsQuery } from "./queries/Pokemons";
import { PokemonsQuery$data } from "./queries/__generated__/PokemonsQuery.graphql";
import Card from "./components/Card";
import { Pagination } from "@mantine/core";

const { Suspense } = React;

const preloadedQuery = loadQuery(RelayEnvironment, PokemonsQuery, {
  /* query variables */
  page: 1,
  take: 12,
});

function App(props: any) {
  const data = usePreloadedQuery(
    PokemonsQuery,
    props.preloadedQuery
  ) as PokemonsQuery$data;

  const [activePage, setPage] = useState(1);

  const onChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Center style={{ width: "100%", height: 200 }}>
        <Title order={1}>Benvindo ao App Pokemon!</Title>
      </Center>
      <Center style={{ marginBottom: 24 }}>
        <Text>Desenvolvido com GraphQl e Relay</Text>
      </Center>
      <Center style={{ marginBottom: 24 }}>
        <Pagination
          page={activePage}
          onChange={onChangePage}
          total={10}
          color={"dark"}
        />
      </Center>
      {data?.pokemons && (
        <Grid style={{ marginInline: 12 }}>
          {data.pokemons.map((pokemon) => (
            <Grid.Col key={pokemon.id} md={6} lg={4} xl={3}>
              <Card {...pokemon} />
            </Grid.Col>
          ))}
        </Grid>
      )}
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
