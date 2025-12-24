/**
 * @generated SignedSource<<e82b3223819fdab12849f08aaf224db8>>
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

(node as any).hash = "cddb100bf4d5cc66e3e6b74e28df14a7";

export default node;
