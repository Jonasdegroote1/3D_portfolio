
import BlogCard from "./blogCard"
import { gql, useQuery } from "@apollo/client";


const GET_BLOGS = gql`
query getPosts {
  posts {
    id
    title
    slug
    description
    categories {
      name
      description
    }
  }
}

`;

export default function BlogCards() {
  const { loading, error, data } = useQuery(GET_BLOGS);
  if (loading) return <div class="loader w-full m-auto h-52"></div>;
  if (error) return <p>Error: {error.message}</p>;
 
  
  return (
    <>
    {data && data.posts && data.posts.length > 0 && 
      <ul className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {data.posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </ul>
    }
    </>
  )
}
