import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";


const GET_POST = gql`
query getPost($slug: String) {
  post(where: {slug: $slug}) {
    id
    title
    slug
    description
    body {
      text
    }
    blocks {
      content
    }
    heroImage {
      url
    }
  }
}
`;

export default function BlogPostPage() {
  const { blogSlug } = useParams();
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { slug: blogSlug },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  console.log(data);
  return (
    <>
    <div className="max-w-screen-xl m-auto">
      <h1>{data.post.title}</h1>
      <div className="flex flex-col items-center justify-center w-screen ">
        <img className="w-full h-96 object-cover" src={data.post.heroImage.url} alt="" />
      </div>
      <ul className="px-4 flex ">
          {data.post.blocks.map((block, index) => (
            <li
              key={block.id}
              className={` w-3/10 p-8 bg-por_white-100 text-por_gray-900 `}
            >
              {block.content}
            </li>
          ))}
        </ul>
    </div>
      
    </>
  );
};
