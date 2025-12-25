/**
 * @generated SignedSource<<e5eab26541eea522c91b5db7a7df1919>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ClientRowMutation$variables = {
  id: string;
};
export type ClientRowMutation$data = {
  readonly deleteClient: {
    readonly email: string | null | undefined;
    readonly id: string | null | undefined;
    readonly name: string | null | undefined;
    readonly phone: string | null | undefined;
  } | null | undefined;
};
export type ClientRowMutation = {
  response: ClientRowMutation$data;
  variables: ClientRowMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Client",
    "kind": "LinkedField",
    "name": "deleteClient",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientRowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientRowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "afeac6a997de0f10a4efea81f1370ed0",
    "id": null,
    "metadata": {},
    "name": "ClientRowMutation",
    "operationKind": "mutation",
    "text": "mutation ClientRowMutation(\n  $id: ID!\n) {\n  deleteClient(id: $id) {\n    id\n    name\n    email\n    phone\n  }\n}\n"
  }
};
})();

(node as any).hash = "0ca01e768ee527dc3f7796dc5d9f5875";

export default node;
