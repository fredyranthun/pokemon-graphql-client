/**
 * @generated SignedSource<<eb84621a779531ff70d4f8820f44750a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppPokemonsQuery$variables = {
  page: number;
  take: number;
};
export type AppPokemonsQuery$data = {
  readonly pokemons: ReadonlyArray<{
    readonly hp: number;
    readonly id: string;
    readonly name: string;
  }>;
};
export type AppPokemonsQuery = {
  response: AppPokemonsQuery$data;
  variables: AppPokemonsQuery$variables;
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
    "name": "AppPokemonsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppPokemonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92732da29893161c0a95f3139a98406c",
    "id": null,
    "metadata": {},
    "name": "AppPokemonsQuery",
    "operationKind": "query",
    "text": "query AppPokemonsQuery(\n  $page: Int!\n  $take: Int!\n) {\n  pokemons(page: $page, take: $take) {\n    id\n    name\n    hp\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c7277bf76dcfc39b19bbffb96c77c07";

export default node;
