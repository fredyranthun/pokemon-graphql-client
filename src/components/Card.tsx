import { createStyles, Paper, Text, Title, Button } from "@mantine/core";
import { PokemonsQuery$data } from "../queries/__generated__/PokemonsQuery.graphql";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.colors.dark,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    backgroundColor: theme.black,
    backgroundBlendMode: "color-dodge",
    backdropFilter: "blur(10px)",
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export type CardProps = PokemonsQuery$data["pokemons"][number];

export default function Card({ id, name, hp }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{
        backgroundSize: "contain",
        backgroundImage: `url(https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg)`,
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {hp}
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Editar
      </Button>
    </Paper>
  );
}
