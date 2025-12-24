import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import {
  ClientsFragment$data,
  ClientsFragment$key,
} from "./__generated__/ClientsFragment.graphql";

import ClientRow from "./ClientRow";

interface ClientsProps {
  clientsRef: ClientsFragment$key;
}

export default function Clients({ clientsRef }: ClientsProps) {
  const data = useFragment(
    graphql`
      fragment ClientsFragment on RootQueryType {
        clients {
          id
          ...ClientRowFragment
        }
      }
    `,
    clientsRef
  );

  const clients = data?.clients || [];

  return (
    <>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Name</th>
            <th style={{ width: "35%" }}>Email</th>
            <th style={{ width: "25%" }}>Phone</th>
            <th style={{ width: "15%" }}></th>
          </tr>
        </thead>
        <tbody>
          {clients.map(
            (client) =>
              client && <ClientRow key={client.id} clientRef={client} />
          )}
        </tbody>
      </table>
    </>
  );
}
