import React, { useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./card";

gsap.registerPlugin(ScrollTrigger);

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

export default function HomeProjectCards() {
  const projectRef = useRef(null);

  const { loading, error, data } = useQuery(GET_PROJECTS);

  useEffect(() => {
    const animateTitles = () => {
      const titles = [projectRef];
      titles.forEach((titleRef) => {
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 25,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 60%", 
            toggleActions: 'play none none reverse',
          },
        });
      });
    };

    if (!loading && !error && data) {
      console.log("Data is available. Initiating animation.");
      animateTitles();
    } else {
      console.log("Loading or error. Animation not initiated.");
    }
  }, [loading, error, data]);

  if (loading) return <div className="loader w-full m-auto h-52"></div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data && data.projects && data.projects.length > 0 && (
        <ul className="flex gap-4 opacity-0" ref={projectRef}>
          {data.projects.slice(0, 3).map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      )}
    </>
  );
}
