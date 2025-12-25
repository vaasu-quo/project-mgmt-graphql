/**
 * @generated SignedSource<<7e2ea01e51570f9e6f21407421521581>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ProjectsQuery$variables = Record<PropertyKey, never>;
export type ProjectsQuery$data = {
  readonly projects: ReadonlyArray<{
    readonly id: string | null | undefined;
    readonly name: string | null | undefined;
    readonly status: string | null | undefined;
  }>;
};
export type ProjectsQuery = {
  response: ProjectsQuery$data;
  variables: ProjectsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Project",
    "kind": "LinkedField",
    "name": "projects",
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
        "name": "status",
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
    "name": "ProjectsQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProjectsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0730897c130bd8317e79513c3a77ed67",
    "id": null,
    "metadata": {},
    "name": "ProjectsQuery",
    "operationKind": "query",
    "text": "query ProjectsQuery {\n  projects {\n    id\n    name\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "a727b53c322581a1d7a5edf920971fed";

export default node;
