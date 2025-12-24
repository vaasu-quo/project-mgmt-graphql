import { FaTrash } from "react-icons/fa";
import { graphql, useFragment } from "react-relay";
import { ClientRowFragment$key } from "./__generated__/ClientRowFragment.graphql";

interface ClientRowProps {
  clientRef: ClientRowFragment$key;
}

const ClientRowFragment = graphql`
  fragment ClientRowFragment on Client {
    name
    email
    phone
  }
`;

export default function ClientRow({ clientRef }: ClientRowProps) {
  // const [deleteClient] = useMutation(DELETE_CLIENT, {
  //   variables: { id: client.id },
  //   refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  //   // update(cache, { data: { deleteClient } }) {
  //   //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
  //   //   cache.writeQuery({
  //   //     query: GET_CLIENTS,
  //   //     data: {
  //   //       clients: clients.filter((client) => client.id !== deleteClient.id),
  //   //     },
  //   //   });
  //   // },
  // });

  const client = useFragment(ClientRowFragment, clientRef);

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          style={{ width: "38px" }}
          onClick={() => {}}
          aria-label="Delete client"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
