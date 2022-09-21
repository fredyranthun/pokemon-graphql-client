type User = {
  id: string;
  name: string;
};

type Response = {
  data: {
    users: User[];
  };
};

async function fetchPokemons(text: string, variables?: any): Promise<Response> {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchPokemons;
