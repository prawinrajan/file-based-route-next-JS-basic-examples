import { useRouter } from "next/router";

// if working on class based component use withRouter & wrap
// our class based component like HOC.

function PortfolioProjectPage() {
  const router = useRouter();
  //   router.
  console.log("pathname", router.pathname);
  console.log("query", router.query);
  console.log("router", router);
 //  router.query - get value encoded with the URL like query string. 
 //
  return (
    <div>
      <h1>The Portfolio Page with params</h1>
    </div>
  );
}

export default PortfolioProjectPage;
