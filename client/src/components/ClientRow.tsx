import { FaTrash } from "react-icons/fa";
import { graphql, useFragment, useMutation } from "react-relay";
import { ClientRowFragment$key } from "./__generated__/ClientRowFragment.graphql";
import { ClientRowMutation } from "./__generated__/ClientRowMutation.graphql";

interface ClientRowProps {
  clientRef: ClientRowFragment$key;
}

const ClientRowFragment = graphql`
  fragment ClientRowFragment on Client {
    id
    name
    email
    phone
  }
`;

export default function ClientRow({ clientRef }: ClientRowProps) {
  const client = useFragment(ClientRowFragment, clientRef);
  const [commitMutation] = useMutation<ClientRowMutation>(graphql`
    mutation ClientRowMutation($id: ID!) {
      deleteClient(id: $id) {
        id
        name
        email
        phone
      }
    }
  `);

  const onClick = () => {
    commitMutation({
      variables: { id: client.id! },
      updater: (store) => {
        const deletedClientId = client.id;

        const root = store.getRoot();

        const clients = root.getLinkedRecords("clients") || [];

        const updatedClients = clients.filter(
          (clientRecord) => clientRecord.getDataID() !== deletedClientId
        );

        root.setLinkedRecords(updatedClients, "clients");
      },
    });
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          style={{ width: "38px" }}
          onClick={onClick}
          aria-label="Delete client"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
