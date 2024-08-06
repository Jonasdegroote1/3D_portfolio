import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Model from "../components/3d_object/project/Canvas";

const GET_PROJECT = gql`
query getProject($slug: String) {
  project(where: {slug: $slug}) {
    id
    title
    slug
    description
    heroImage {
      url
    }
    blocks {
      id
      content
    }
  }
}
`;

export default function ProjectDetailPage() {
  
  const { projectSlug } = useParams();
  
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { slug: projectSlug },
  });

  if (loading) return <div className="loader w-full m-auto h-52"></div>;

  return (
    <>
    <div className="max-w-screen-xl m-auto">
    <Model data={data} />
      <section className="flex flex-col items-center justify-center w-screen bg-gray-100">
      <img className="w-full h-96 object-cover" src={data.project.heroImage.url} alt="" />
    </section>


      <section >
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white py-8">{data.project.title}</h1>
        <ul className="px-4 " >
          {data.project.blocks.map((block, index) => (
            <li
              key={block.id}
              className={` w-3/10 p-8 bg-por_white-100 text-por_gray-900 mb-8 ${
                index % 2 === 0 ? "even" : "odd"
              }`}
            >
              {block.content}
            </li>
          ))}
        </ul>
      </section>
      </div>
    </>
  )
}
