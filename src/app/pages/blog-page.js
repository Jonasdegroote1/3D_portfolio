// Import external modules

import BlogCards from "../components/blog/blogCards";


export default function BlogPage() {
    

  return (
    <>
    <div className="max-w-screen-xl m-auto">
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-8">Blog posts</h1>
      <BlogCards />
    </div>
    </>
  );
};