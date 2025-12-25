/**
 * @generated SignedSource<<30eba632b8ffb9ad560f5842ed9d7440>>
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
    "cacheID": "645a1e40f7da2b6882e6ac41cc541839",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...ClientsFragment\n  ...AddProjectModalFragment\n}\n\nfragment AddProjectModalFragment on RootQueryType {\n  clients {\n    id\n  }\n}\n\nfragment ClientRowFragment on Client {\n  name\n  email\n  phone\n}\n\nfragment ClientsFragment on RootQueryType {\n  clients {\n    id\n    ...ClientRowFragment\n  }\n}\n"
  }
};

(node as any).hash = "eb008cde07d1dfb12b0c11663b4f26cf";

export default node;
