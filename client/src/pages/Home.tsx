import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import { Suspense } from "react";
import ProjectsSkeleton from "components/ProjectsSkeleton";
import ClientsSkeleton from "components/ClientsSkeleton";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { ClientsQuery } from "components/__generated__/ClientsQuery.graphql";

const GetClientsQuery = graphql`
  query HomeQuery {
    ...ClientsFragment
  }
`;

export default function Home() {
  const data = useLazyLoadQuery<ClientsQuery>(
    GetClientsQuery,
    {},
    { fetchPolicy: "store-or-network" }
  );

  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        {/* <AddProjectModal /> */}
      </div>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <hr />
      <Suspense fallback={<ClientsSkeleton />}>
        <Clients clientsRef={data} />
      </Suspense>
    </>
  );
}
