import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import withSuspense from "components/WithSuspense";
import ProjectSkeleton from "components/ProjectSkeleton";
import { graphql, useLazyLoadQuery } from "react-relay";

const ProjectQuery = graphql`
  query ProjectQuery($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

function Project() {
  const { id } = useParams();

  // const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  const data = useLazyLoadQuery<ProjectQuery>(ProjectQuery, { id });

  return (
    <>
      <div className="mx-auto w-75 card p-5">
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>

        <h1>{data.project.name}</h1>
        <p>{data.project.description}</p>

        <h5 className="mt-3">Project Status</h5>
        <p className="lead">{data.project.status}</p>

        <ClientInfo client={data.project.client} />

        <EditProjectForm project={data.project} />

        <DeleteProjectButton projectId={data.project.id} />
      </div>
    </>
  );
}

export default withSuspense(Project, <ProjectSkeleton />);
