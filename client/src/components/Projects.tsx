import React from "react";
import Spinner from "./Spinner";
import { graphql, useLazyLoadQuery } from "react-relay";
import { ProjectsQuery } from "./__generated__/ProjectsQuery.graphql";
import ProjectCard from "./ProjectCard";

const GetProjectsQuery = graphql`
  query ProjectsQuery {
    projects {
      id
      name
      status
    }
  }
`;

export default function Projects(): React.ReactElement {
  const data = useLazyLoadQuery<ProjectsQuery>(GetProjectsQuery, {});

  console.log(data);
  const loading = false;
  const error = false;

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects && data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            project && <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
