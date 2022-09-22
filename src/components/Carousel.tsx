import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import Card from "./Card";
import { PokemonsQuery$data } from "../queries/__generated__/PokemonsQuery.graphql";

export type CardsCarouselProps = {
  pokemons: PokemonsQuery$data["pokemons"];
};
export default function CardsCarousel(props: CardsCarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = props.pokemons.map((pokemon) => (
    <Carousel.Slide key={pokemon.id}>
      <Card {...pokemon} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
