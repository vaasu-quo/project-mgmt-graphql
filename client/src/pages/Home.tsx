import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import { Suspense } from "react";
import ProjectsSkeleton from "components/ProjectsSkeleton";
import ClientsSkeleton from "components/ClientsSkeleton";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <hr />
      <Suspense fallback={<ClientsSkeleton />}>
        <Clients />
      </Suspense>
    </>
  );
}
