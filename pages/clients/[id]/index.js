import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const route = useRouter();
  function loadProjectHandler() {
    // load data...
    // route.push('/clients/max/projects')
    route.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "project1" },
    });
  }
  return (
    <div>
      <h1>The Projects of a given client</h1>
      {/* navigate when button clicked */}
      <button onClick={loadProjectHandler}>Load a Project a</button>
    </div>
  );
}

export default ClientsProjectsPage;
