/**
 * @generated SignedSource<<70451952178875fa09522d6d707f0f33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeQuery$variables = Record<PropertyKey, never>;
export type HomeQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AddProjectModalFragment" | "ClientsFragment">;
};
export type HomeQuery = {
  response: HomeQuery$data;
  variables: HomeQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClientsFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AddProjectModalFragment"
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "948a5673b65e6c4058d1234a329c0262",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...ClientsFragment\n  ...AddProjectModalFragment\n}\n\nfragment AddProjectModalFragment on RootQueryType {\n  clients {\n    id\n    name\n  }\n}\n\nfragment ClientRowFragment on Client {\n  id\n  name\n  email\n  phone\n}\n\nfragment ClientsFragment on RootQueryType {\n  clients {\n    id\n    ...ClientRowFragment\n  }\n}\n"
  }
};

(node as any).hash = "eb008cde07d1dfb12b0c11663b4f26cf";

export default node;
