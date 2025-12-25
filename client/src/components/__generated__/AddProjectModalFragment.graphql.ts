/**
 * @generated SignedSource<<5c9d156304712210f83b55328d7cf735>>
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
    readonly name: string | null | undefined;
  }>;
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};

(node as any).hash = "dc33035788069c9360e156f030bf8e28";

export default node;
