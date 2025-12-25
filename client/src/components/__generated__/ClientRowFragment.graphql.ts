/**
 * @generated SignedSource<<9d0a81eb999264b13849af47d3726264>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientRowFragment$data = {
  readonly email: string | null | undefined;
  readonly id: string | null | undefined;
  readonly name: string | null | undefined;
  readonly phone: string | null | undefined;
  readonly " $fragmentType": "ClientRowFragment";
};
export type ClientRowFragment$key = {
  readonly " $data"?: ClientRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientRowFragment",
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
  "type": "Client",
  "abstractKey": null
};

(node as any).hash = "91e5921d85921288fbfafae8f6404542";

export default node;
