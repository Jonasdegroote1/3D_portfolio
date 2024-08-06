import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Hero from "../components/layout/hero";
import HomeBlogCards from "../components/blog/homeBlogCards";
import HomeProjectCards from "../components/project/homeProjectCards";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const projectTitleRef = useRef(null);
  const blogTitleRef = useRef(null);

  useEffect(() => {
    const titles = [projectTitleRef, blogTitleRef];

    titles.forEach((titleRef) => {
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%", 
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <>
      <Hero />
      <div className="container px-5 py-12 mx-auto max-w-screen-xl m-auto">
        <h2
          ref={projectTitleRef}
          className="mb-8 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white md:text-4xl opacity-0"
        >
          Projects
        </h2>
        <HomeProjectCards/>
      </div>
      <div className="container px-5 py-12 mx-auto max-w-screen-xl m-auto">
        <h2
          ref={blogTitleRef}
          className="mb-8 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white md:text-4xl opacity-0"
        >
          Blog posts
        </h2>
        <HomeBlogCards />
      </div>
    </>
  );
}
