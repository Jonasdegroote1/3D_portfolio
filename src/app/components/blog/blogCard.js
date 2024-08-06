import { Link } from "react-router-dom"
import { ROUTES } from "../../routes"


export default function BlogCard({post}) {
  return (
    <>
    <li key={post.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <div className="flex flex-col justify-between flex-1 p-6">
              <div className="flex-1">
                <Link to={`${ROUTES.Blog}/${post.slug}`} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.description}</p>
                </Link>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img className="object-cover w-8 h-8 rounded-full" src="https://i.pravatar.cc/100?u=1" alt="" />
                  <Link to={`${ROUTES.Blog}/${post.slug}`} className="mx-3 text-sm font-medium text-gray-900 dark:text-white">{post.categories[0].name}</Link>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Mar 10, 2020</p>
              </div>
            </div>
          </li>
    </>
  )
}
