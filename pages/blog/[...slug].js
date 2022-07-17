import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  // file name syntax 
  // [IDENTIFIER] - dynamic file.
  // [...IDENTIFIER] - will return array of QS delimited by / in URL.
  
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
