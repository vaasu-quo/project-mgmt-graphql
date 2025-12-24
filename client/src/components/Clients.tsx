import { graphql, useLazyLoadQuery } from "react-relay";
import { ClientsQuery } from "./__generated__/ClientsQuery.graphql";
import ClientRow from "./ClientRow";

const GetClientsQuery = graphql`
  query ClientsQuery {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export default function Clients() {
  const data = useLazyLoadQuery<ClientsQuery>(
    GetClientsQuery,
    {},
    { fetchPolicy: "store-and-network" }
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
            (client) => client && <ClientRow key={client.id} client={client} />
          )}
        </tbody>
      </table>
    </>
  );
}
