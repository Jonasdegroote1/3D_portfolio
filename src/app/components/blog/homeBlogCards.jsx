
import { useEffect, useRef } from "react";
import BlogCard from "./blogCard"
import { gql, useQuery } from "@apollo/client";
import gsap from "gsap";


const GET_BLOGS = gql`
query getBlogs {
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

export default function HomeBlogCards() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  const blogRef = useRef(null);

    useEffect(() => {
    const animateTitles = () => {
      const titles = [blogRef];
      titles.forEach((titleRef) => {
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 25,
          duration: 1,
          stagger: .2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 50%", 
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

  if (loading) return <div class="loader w-full m-auto h-52"></div>;
  if (error) return <p>Error: {error.message}</p>;
 
  let random = Math.floor(Math.random() * (data.posts.length - 4));

  return (
    <>
    {data && data.posts && data.posts.length > 0 && 
      <ul className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 opacity-0" ref={blogRef}>
        {data.posts.slice(random ,random + 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </ul>
    }
    </>
  )
}
