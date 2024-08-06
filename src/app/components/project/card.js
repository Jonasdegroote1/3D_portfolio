import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Card({project}) {
  return (
    <li key={project.id} className=" card w-3/10 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 scroll-section">
      <Link to={`${ROUTES.Project}/${project.slug}`}>
        <img className="object-cover w-full h-56 rounded-lg " src={project.thumbnail.url} alt="" />
      </Link>
      <div className="card-text p-5 opacity-0">
        <Link to={`${ROUTES.Project}/${project.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ project.title }</h5>
        </Link>
        <Link to={`${ROUTES.Project}/${project.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </li>
  )
}
