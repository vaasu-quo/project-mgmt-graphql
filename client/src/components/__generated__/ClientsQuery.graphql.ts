/**
 * @generated SignedSource<<b9c0e6732ffca48170c20e835bd353b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ClientsQuery$variables = Record<PropertyKey, never>;
export type ClientsQuery$data = {
  readonly clients: ReadonlyArray<{
    readonly email: string | null | undefined;
    readonly id: string | null | undefined;
    readonly name: string | null | undefined;
    readonly phone: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type ClientsQuery = {
  response: ClientsQuery$data;
  variables: ClientsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Client",
    "kind": "LinkedField",
    "name": "clients",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4c9cc6c5579ad057d08d1bff6b0f632f",
    "id": null,
    "metadata": {},
    "name": "ClientsQuery",
    "operationKind": "query",
    "text": "query ClientsQuery {\n  clients {\n    id\n    name\n    email\n    phone\n  }\n}\n"
  }
};
})();

(node as any).hash = "215249ad9bd1b5aea517651f95233795";

export default node;
