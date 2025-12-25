/**
 * @generated SignedSource<<fce94f75cb926eba97199343258ab3b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AddClientModalMutation$variables = {
  email: string;
  name: string;
  phone: string;
};
export type AddClientModalMutation$data = {
  readonly addClient: {
    readonly email: string | null | undefined;
    readonly id: string | null | undefined;
    readonly name: string | null | undefined;
    readonly phone: string | null | undefined;
  } | null | undefined;
};
export type AddClientModalMutation = {
  response: AddClientModalMutation$data;
  variables: AddClientModalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "phone"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "phone",
        "variableName": "phone"
      }
    ],
    "concreteType": "Client",
    "kind": "LinkedField",
    "name": "addClient",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddClientModalMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddClientModalMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "65492a17f886b19b5e8b0de9281bc294",
    "id": null,
    "metadata": {},
    "name": "AddClientModalMutation",
    "operationKind": "mutation",
    "text": "mutation AddClientModalMutation(\n  $name: String!\n  $email: String!\n  $phone: String!\n) {\n  addClient(name: $name, email: $email, phone: $phone) {\n    id\n    name\n    email\n    phone\n  }\n}\n"
  }
};
})();

(node as any).hash = "aec9e156ca08ae4a27a600bd59065479";

export default node;
