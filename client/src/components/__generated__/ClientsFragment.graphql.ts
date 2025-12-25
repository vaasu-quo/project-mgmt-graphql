/**
 * @generated SignedSource<<13890fd3db11c27a4ca407e23e0bef4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsFragment$data = {
  readonly clients: ReadonlyArray<{
    readonly id: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ClientRowFragment">;
  }>;
  readonly " $fragmentType": "ClientsFragment";
};
export type ClientsFragment$key = {
  readonly " $data"?: ClientsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientsFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ClientRowFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};

(node as any).hash = "90e03090c7bbc1fb2b1aa045343bbe41";

export default node;
