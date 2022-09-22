import { graphql } from "react-relay";

export const PokemonsQuery = graphql`
  query PokemonsQuery($page: Int!, $take: Int!) {
    pokemons(page: $page, take: $take) {
      id
      name
      hp
    }
  }
`;
