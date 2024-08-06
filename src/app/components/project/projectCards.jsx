import { gql, useQuery } from "@apollo/client";
import Card from "./card";


const GET_PROJECTS = gql`
  query getProject {
    projects {
      id
      title
      description
      slug
      thumbnail {
        url
      }
    }
  }
`;

export default function ProjectCards() {
    const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <div className="loader w-full m-auto h-52"></div>;
  if (error) return <p>Error: {error.message}</p>;



  return (
    <>
        {data && data.projects && data.projects.length > 0 && (
          <ul className="flex flex-wrap gap-8" >
            {data.projects.map((project) => (
              <Card key={project.id} project={project} />
              ))}
          </ul>
        )}
    </>
  );
}
