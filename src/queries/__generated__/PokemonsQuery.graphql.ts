/**
 * @generated SignedSource<<3c27666a9e22c5cda7d48f00b729db7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonsQuery$variables = {
  page: number;
  take: number;
};
export type PokemonsQuery$data = {
  readonly pokemons: ReadonlyArray<{
    readonly hp: number;
    readonly id: string;
    readonly name: string;
  }>;
};
export type PokemonsQuery = {
  response: PokemonsQuery$data;
  variables: PokemonsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "take"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Variable",
        "name": "take",
        "variableName": "take"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hp",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "96a066723dc3ad085842c605ee97a46b",
    "id": null,
    "metadata": {},
    "name": "PokemonsQuery",
    "operationKind": "query",
    "text": "query PokemonsQuery(\n  $page: Int!\n  $take: Int!\n) {\n  pokemons(page: $page, take: $take) {\n    id\n    name\n    hp\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c47e691966693dc861f80af9c884115";

export default node;
