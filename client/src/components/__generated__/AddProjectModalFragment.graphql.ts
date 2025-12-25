/**
 * @generated SignedSource<<eb7d4ed87e3f9da8a01a0862b4bbc70c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddProjectModalFragment$data = {
  readonly clients: ReadonlyArray<{
    readonly id: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "AddProjectModalFragment";
};
export type AddProjectModalFragment$key = {
  readonly " $data"?: AddProjectModalFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AddProjectModalFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddProjectModalFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};

(node as any).hash = "57e6f649aafa64e44f6978aa14f6f60e";

export default node;
