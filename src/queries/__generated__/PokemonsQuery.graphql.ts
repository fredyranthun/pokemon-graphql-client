/**
 * @generated SignedSource<<70a4995734b8339bc156ba73326dc8d3>>
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
    readonly attack: number;
    readonly defense: number;
    readonly hp: number;
    readonly id: string;
    readonly name: string;
    readonly spAttack: number;
    readonly spDefense: number;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "attack",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "defense",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "spAttack",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "spDefense",
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
    "cacheID": "2bf003278ffa216ded442f2eaa4d4c4b",
    "id": null,
    "metadata": {},
    "name": "PokemonsQuery",
    "operationKind": "query",
    "text": "query PokemonsQuery(\n  $page: Int!\n  $take: Int!\n) {\n  pokemons(page: $page, take: $take) {\n    id\n    name\n    hp\n    attack\n    defense\n    spAttack\n    spDefense\n  }\n}\n"
  }
};
})();

(node as any).hash = "db038fa759b7ba41c77a18c3b73b06b4";

export default node;
